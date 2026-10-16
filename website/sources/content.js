/* This code is for hash-based page loading

Copyright (C) 2026 Yotam Limor-Waisberg
For more information visit <https://www.github.com/YotamLW/WebIE>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

class Element {

  constructor (id) {
    this.id = id
    this.element = document.getElementById(id)
  }

  refreshTheme () {

    if (!currentUser.settings.darkMode) {
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

    else {
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

}

class Canvas extends Element {

  paused = true
  static = false // false: canvas can be longer than page, true: canvas remains fixed when scrolling

  constructor (id, referenceElement) {
    super(id)
    this.c = this.element.getContext("2d")
    this.referenceElement = referenceElement
  }

  async load (page, directoryPath) {
    this.disable()
    for (let codeFile of page.codeFiles) {
      try {
        let script = document.createElement("script")
        script.src = `/pages${directoryPath}${codeFile}.js`
        script.id = codeFile
        document.body.appendChild(script)
        script.onload = () => {this.enable()}
      } catch (error) {console.log(`JS not loaded | ${error}`)}
    }
  }

  refreshCanvas () {
    this.element.width = this.referenceElement.scrollWidth
    this.element.height = this.referenceElement.scrollHeight
    this.w = this.element.width
    this.h = this.element.height
    this.c.clearRect(0, 0, this.w, this.h)
  }

  loop () {
    if (this.paused) return
    this.c.clearRect(0, 0, this.w, this.h)
    logic(this)
    window.requestAnimationFrame(() => this.loop)
  }

  enable () {
    this.refreshCanvas()
    this.paused = false
    this.loop()
  }

  disable () {
    this.paused = true
    requestAnimationFrame(() => {this.refreshCanvas()})
  }

}

class Page extends Element {

  constructor (id) {super(id)}

  async load (page, directoryPath) {
    this.element.innerHTML = ""
    document.querySelectorAll(".pageAnimations").forEach(script => script.remove())
    for (let textFile of page.textFiles) {
      const pageResponse = await fetch(`/pages${directoryPath}${textFile}.html`)
      this.element.innerHTML = await pageResponse.text()
      MathJax.typesetPromise() // renders maths
    }
    this.tableOfContents()
    this.refreshTheme()
  }

  tableOfContents () {
    document.querySelectorAll(".toc").forEach(link => { // selects all table-of-contents links
      link.addEventListener("click", (event) => {
        event.preventDefault() // scrolling uses hashes which are already in use for pages, so this prevents url being changed but still allows scrolling to element
        document.getElementById(link.getAttribute("data-scroll-to"))?.scrollIntoView({behavior: "instant"}) // scrolls to matching id tag
      })
    })
  }

}

class Banner extends Element {

  constructor (id) {super(id)}

  async load () {
    let content = await fetch("/sources/banner.html")
    this.element.innerHTML = await content.text()
  }

}

class Navigator extends Element {

  constructor (id) {super(id)}

}
