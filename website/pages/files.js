// -- Notes for creating paths
// create file > add below > add parent link
// create html content and / or js code file
// add name to appropriate path in below `root` object for page validation
// names are case sensitive, can repeat names in different directories, cannot have file and directory with same name in the same parent directory
// add link from parent page to added page
// link names must be `/file` for root or `file` to append to current path

class Node {

  constructor (name) {
    this.name = name
    this.parent = null
  }

}

class File extends Node {
  
  constructor (name, type) {
    super(name)
    this.type = type
  }

}

class Directory extends Node {

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
  },

  "notes": {
    "home": text,
    "a_level": text,
  },

  "webie": {
    "home": text,
    "resources": {
      "home": text,
      "proof": text,
      "fundamentals": text,
      "algebra": text,
      "computer_science": both,
      "energy": text,
      "fundamentals_of_science": text,
    },
    "programs": {
      "home": text,
    },
  },

  "about_me": {
    "home": text,
    "music": text,
  },

}

const route = new Directory("root", [

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
  ]),

  // WebIE
  new Directory("webie", [
    new File("home", text),
    // Resources
    new Directory("resources", [
      new File("home", text),
      new File("fundamentals", text),
    ]),
    new Directory("programs", [
      new File("home", text),
    ]),
  ]),

  // About Me
  new Directory("about_me", [
    new File("home", text),
    new File("music", text),
  ]),

])
