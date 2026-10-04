class Node {

  constructor (name) {
    this.name = name
    this.parent = null
  }

}

class File extends Node {
  
  // -- File Types
  // text - self-contained page
  // code - self-contained javascript-only interface
  // both - one html and one javascript file is used
  // chapter - html file content appended onto directory's default page

  constructor (name, type) {
    super(name)
    this.type = type
  }

  load_page ( page_element ) {
    page_element.innerHTML = ""
    document.getElementById("pageAnimations")?.remove()
    refreshScreen() // refreshes canvas element (from user.js)
  }

  async load_html ( page_element , path ) {
    try {
      let page_response = await fetch(`/pages${path}.html`)
      if (this.type == "chapter") {this.load_html(page_element,path)}
      page_element.innerHTML += page_response.text()
      MathJax.typesetPromise() // renders maths
    } catch (error) {console.log(`HTML not loaded | ${error}`)}
  }

  async load_javascript ( path ) {
    try {
      let script = document.createElement("script")
      script.src = `/pages${path}.js`
      script.id = "pageAnimations"
      document.body.appendChild(script)
      script.onload = () => {paused = false; loop()} // initiates animation loop
    } catch (error) {console.log(`JS not loaded | ${error}`)}
  }

  generate_directory_path () {
    let path
    while (this.parent) {path = this.parent.name + "/" + path}
    path = "/" + path
    return path
  }

}

class Directory extends Node {

  default_page = "home"

  constructor (name, children = []) {
    super(name)
    this.children = children
    for (const child of children) {child.parent = this}
  }

}

// if (obj instanceof File) {}

const text = "text"
const code = "code"
const both = "both"

let root = {

  "home": text,

  "projects": {
    "home": text,
    "cacofonix": text,
    "linux": {
      "home": text,
      "installation": text,
    },
    "3d": code,
  },

  "notes": {
    "home": text,
    "a_level": text,
    "university": {
      "home": text,
      "year1": {
        "home": text,
        "dynamics_and_thermodynamics": {
          "home": text,
          "01": text,
          "02": text,
          "03": text,
          "04": text,
          "05": text,
        }
      }
    }
  },

  "webie": {
    "home": text,
    "proof": text,
    "fundamentals": text,
  },

  "about_me": {
    "home": text,
    "music": text,
  },

}

const pages = new Directory("root", [

  // 1) create file 2) add below 3) add parent link

  new File("home", text),

  // Projects
  new Directory("projects", [
    new File("home", text),
    new File("cacofonix", text),
  ]),

  // Notes
  new Directory("notes", [
    new File("home", text),
    new File("a_level", text),
    new Directory("university", [
      new Directory("year2", [
        new Directory("dynamics_and_fluid_mechanics", [
          new File("home", text),
          new File("01", text),
        ])
      ])
    ])
  ]),

  // WebIE
  new Directory("webie", [
    new File("home", text),
    new File("fundamentals", text),
    new File("proof", text),
  ]),

  // About Me
  new Directory("about_me", [
    new File("home", text),
    new File("music", text),
  ]),

])

// -- File Creation
// File names are case sensitive
// Can have file and directory with same name at the same level
