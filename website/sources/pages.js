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
let navigator

async function loadBanner () {
  let content = await fetch("/sources/banner.html")
  banner.innerHTML = await content.text()
  refreshTheme()
}

function loadNavigator () {
  
}

// this function handles the fetching of content and / or code files to load
async function loadPage (path, pushState = true) {

  // clears content and code tags
  page.innerHTML = ""
  document.getElementById("pageAnimations")?.remove()
  refreshScreen() // refreshes canvas element (from user.js)

  if (pushState && path[0] != "/") {path = window.location.hash.substring(1).replace("home", "") + path}
  let result = validatePath(path.substring(1).split("/"), 0, root) // initial call to recursive function with root directory, returns [final path, file type (consts in files.js)]
  path = "/" + result[0].join("/")

  if (result[1] == "text" || result[1] == "both") { try { // loads text
    let textResponse = await fetch(`/pages${path}.html`)
    page.innerHTML = await textResponse.text()
    MathJax.typesetPromise() // renders any maths formulas
  } catch (error) {console.log(`home not found | ${error}`)} }

  if (result[1] == "code" || result[1] == "both") { // loads code
    let script = document.createElement("script")
    script.src = `/pages${path}.js`
    script.id = "pageAnimations"
    document.body.appendChild(script)
    script.onload = () => {paused = false; loop()} // initiates animation loop
  }

  if (pushState) {history.pushState({path}, "", `#${path}`)}
  refreshTheme()
  tableOfContents()

}

// recursive function to validate file path, returning an appropriate path and what type of files there are (absed on files.js)
function validatePath (pathComponents, i, currentDirectory) { // (input unvalidated filepath, depth, current directory of depth)
  let next = currentDirectory[pathComponents[i]] // loads value of next key target destination (directory or file)
  if (typeof(next) == "object") { // directory
    let result = validatePath(pathComponents, i + 1, next) // calls function recursively with same initial list, +1 depth and next directory
    result[0].unshift(pathComponents[i]) // appends current directory to start of file path array
    return result
  }
  else if (typeof(next) == "string") {return [[pathComponents[i]], next]} // files | returns [file name (inside array), file types]
  else return [["home"], "text"] // returns home file of current directory in case file was not found
}

// updates page using hashes to allow for back button usage
function updateHistory (path) {
  
}

function blah (path) {
  let pathway = path.split("/")
  console.log(pathway)
  if (pathway.at(-1) == home) {history.pushState({path}, "", `#${pathway.splice(0, pathway.length - 1).join("/")}`)}
  else {history.pushState({path}, "", `#${path}`)}
  console.log(history)
}

// loads page from history when using back / forward buttons
window.addEventListener("popstate", (event) => {
  if (event.state?.path) {
    loadPage(event.state.path, false)
  }
})

function refreshTheme () {

  if (currentUser.settings.pageTheme == "light") {
    // banner
    document.documentElement.style.setProperty("--banner-color", "#0453ba")
    document.documentElement.style.setProperty("--button-color", "#256ac3")
    document.documentElement.style.setProperty("--button-text-color", "#ffffff")
    // background colours
    document.documentElement.style.setProperty("--navigator-color", "#aaaaaa")
    document.documentElement.style.setProperty("--body-color", "#dddddd")
    document.documentElement.style.setProperty("--page-color", "#f9fbff")
    // text elements
    document.documentElement.style.setProperty("--text-color", "#000000")
    document.documentElement.style.setProperty("--link-color", "#0453ba")
    document.documentElement.style.setProperty("--code-body-color", "#00000016")
    document.documentElement.style.setProperty("--title-color", "#000000")
    document.documentElement.style.setProperty("--chapter-color", "#101b70")
    document.documentElement.style.setProperty("--section-color", "#047de0")
  } 

  else if (currentUser.settings.pageTheme == "dark") {
    //banner
    document.documentElement.style.setProperty("--banner-color", "#090966")
    document.documentElement.style.setProperty("--button-color", "#1c1c94")
    document.documentElement.style.setProperty("--button-text-color", "#ffffff")
    // background colours
    document.documentElement.style.setProperty("--navigator-color", "#666666")
    document.documentElement.style.setProperty("--body-color", "#333333")
    document.documentElement.style.setProperty("--page-color", "#111111")
    // text elements
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
  document.querySelectorAll(".toc").forEach(link => { // selects all table-of-contents links
    link.addEventListener("click", (event) => {
      event.preventDefault() // scrolling uses hashes which are already in use for pages, so this prevents url being changed but still allows scrolling to element
      document.getElementById(link.getAttribute("data-scroll-to"))?.scrollIntoView({behavior: "instant"}) // scrolls to matching id tag
    })
  })
}
