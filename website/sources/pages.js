/* This code is for hash-based page loading 

Copyright (C) 2026 Yotam Limor-Waisberg 
For more information visit <https://www.github.com/YotamLW/WebIE> 

This program is free software: you can redistribute it and/or modify 
it under the terms of the GNU Affero General Public License as 
published by the Free Software Foundation, either version 3 of the 
License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
GNU Affero General Public License for more details. 

You should have received a copy of the GNU Affero General Public License 
along with this program.  If not, see <https://www.gnu.org/licenses/>. 
*/

let home = "home"
let path = home
let page
let banner

// this function fetches the banner content  
async function loadBanner () {
  let content = await fetch("/sources/banner.html")
  banner.innerHTML = await content.text()
  refreshTheme()
}

// this function handles the fetching of content and / or code files to load 
async function loadPage (path, pushState = true) {

  // clears content and code tags 
  page.innerHTML = ""
  document.getElementById("pageAnimations")?.remove()
  refreshScreen()

  if (textFiles.includes(path)) { // loads content if it exists 
    let textResponse = await fetch(`./pages/${path}.html`)
    page.innerHTML = await textResponse.text()
    MathJax.typesetPromise() // renders any maths formulas 
    if (pushState) {updateHistory(path)}
  }

  if (codeFiles.includes(path)) { // loads code if it exists 
    let script = document.createElement("script")
    script.src = `./pages/${path}.js`
    script.id = "pageAnimations"
    document.body.appendChild(script)
    script.onload = () => {paused = false; loop()} // initiates animation loop 
    if (!textFiles.includes(path) && pushState) {updateHistory(path)}
  }

  refreshTheme()
  tableOfContents()

}

// updates page using hashes to allow for back button usage 
function updateHistory (path) {
  let pathway = path.split("/")
  if (pathway.at(-1) == home) {history.pushState({path}, "", `#${pathway.splice(0, pathway.length - 1).join("/")}`)}
  else {history.pushState({path}, "", `#${path}`)}
}

// loads page from history when using back / forward buttons 
window.addEventListener("popstate", (event) => {
  if (event.state?.path) {
    loadPage(event.state.path, false)
  }
})

// checks current page hash to see if valid (allows loading page rather than home) 
function checkHash (hash) {
  if (hash) {
    let hashPath = hash.split("#")[1]
    if (textFiles.includes(hashPath) || codeFiles.includes(hashPath)) return hashPath
    else return home
  } else return home
}

// refreshes theme 
function refreshTheme () {
  if (currentUser.settings.pageTheme == "light") {
    document.documentElement.style.setProperty("--banner-color", "#0453ba")
    document.documentElement.style.setProperty("--button-color", "#256ac3")
    document.documentElement.style.setProperty("--button-text-color", "#ffffff")
    document.documentElement.style.setProperty("--body-color", "#dddddd")
    document.documentElement.style.setProperty("--page-color", "#f9fbff")
    document.documentElement.style.setProperty("--text-color", "#000000")
    document.documentElement.style.setProperty("--link-color", "#0453ba")
    document.documentElement.style.setProperty("--code-body-color", "#00000016")
    document.documentElement.style.setProperty("--title-color", "#000000")
    document.documentElement.style.setProperty("--chapter-color", "#101b70")
    document.documentElement.style.setProperty("--section-color", "#047de0")
  } else if (currentUser.settings.pageTheme == "dark") {
    document.documentElement.style.setProperty("--banner-color", "#090966")
    document.documentElement.style.setProperty("--button-color", "#1c1c94")
    document.documentElement.style.setProperty("--button-text-color", "#ffffff")
    document.documentElement.style.setProperty("--body-color", "#333333")
    document.documentElement.style.setProperty("--page-color", "#111111")
    document.documentElement.style.setProperty("--text-color", "#eeeeee")
    document.documentElement.style.setProperty("--link-color", "#3399ff")
    document.documentElement.style.setProperty("--code-body-color", "#ffffff16")
    document.documentElement.style.setProperty("--title-color", "#cccccc")
    document.documentElement.style.setProperty("--chapter-color", "#69c5fa")
    document.documentElement.style.setProperty("--section-color", "#007efc")
  }
}

// sets up table of contents links
function tableOfContents () {
  document.querySelectorAll(".toc").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault()
      document.getElementById(link.getAttribute("data-scroll-to"))?.scrollIntoView({behavior: "instant"})
    })
  })
}
