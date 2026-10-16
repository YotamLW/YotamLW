/* This is code for general user interface to be used by multiple pages 

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


class User {

  settings = {
    darkMode: false,
    currentPath: "/home",
    retainCurrentPath: true,
  }

  constructor (name) {
    this.name = name
    this.banner = new Banner("banner")
    this.page = new Page("page")
    this.canvas = new Canvas("screen", content)
  }

  loadPage (path, pushHistoryState = true) {
    path = path.split("/")
    let pathComponents = this.settings.currentPath.split("/")
    pathComponents.pop()
    if (path[0] == "") {pathComponents = path}
    else {pathComponents.push(...path)}
    pathComponents.shift()

    let result = this.validatePath(pathComponents, 0, pages)
    let page = result[0]
    const directoryPath = wrap(result[1], "/")

    this.banner.load()
    this.page.load(page, directoryPath)
    this.canvas.load(page, directoryPath)

    path = directoryPath + page.name
    if (pushHistoryState) {history.pushState({path}, "", `#${path}`)}
    this.settings.currentPath = path
    this.saveSettings()
  }

  // returns appropriate page instance and validated path
  validatePath (pathComponents, i, currentDirectory) {
    const next = currentDirectory.findChild(pathComponents[i])
    if (next instanceof Directory) {
      let result = this.validatePath(pathComponents, i+1, next)
      result[1].unshift(next.name)
      return result
    }
    else if (next instanceof File) {return [next, []]}
  }

  toggleTheme () {this.settings.darkMode = !this.settings.darkMode; this.saveSettings()}

  saveSettings () {localStorage.setItem("userSettings", JSON.stringify(this.settings))}
  loadSettings () {
    if (localStorage.userSettings) {
      const settings = JSON.parse(localStorage.getItem("userSettings"))
      this.settings.darkMode = settings.darkMode
      if (settings.retainCurrentPath) {this.settings.currentPath = settings.currentPath}
    }
    else {console.log("Local storage 'settings' empty")}
  }

}

// loads page from history when using back / forward buttons
window.addEventListener("popstate", (event) => {
  if (event.state?.path) {
    currentUser.loadPage(event.state.path, false)
  }
})



let currentUser = new User("Bob")
currentUser.loadSettings()

function loadPage (path) {currentUser.loadPage(path)}
