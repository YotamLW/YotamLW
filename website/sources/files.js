class Node {

  constructor (name) {
    this.name = name
    this.parent = null
  }

}

class File extends Node {
  
  // -- File Types
  // text / code - adds self-named file path
  // chapter - html file content appended onto some default page

  constructor (name, type = "text", textFiles = [], codeFiles = []) {
    super(name)
    this.type = type
    this.textFiles = textFiles
    if (type == "text") {this.textFiles.push(name)}
    this.codeFiles = codeFiles
    if (type == "code") {this.codeFiles.push(name)}
  }

}

class Directory extends Node {

  constructor (name, children = []) {
    super(name)
    this.children = children
    this.home = new File("home")
    this.children.push(this.home)
    for (const child of this.children) {child.parent = this}
  }

  findChild (name) {
    for (let child of this.children) {if (child.name == name) return child}
    return this.home
  }

}


const pages = new Directory("root", [

  // 1) create file 2) add below 3) add parent link

  // Projects
  new Directory("projects", [
    new File("cacofonix"),
    new Directory("linux", [
      new File("installation"),
      new File("users"),
      new File("ssh_git"),
      new File("dwm"),
    ]),
    new File("3d", "code"),
  ]),

  // Notes
  new Directory("notes", [
    new File("a_level"),
    new Directory("university", [
      new Directory("year1", []),
      new Directory("year2", [
        new Directory("dynamics_and_fluid_mechanics", [
          new File("01"),
        ]),
      ]),
    ]),
  ]),

  // WebIE
  new Directory("webie", [
    new File("fundamentals"),
    new File("proof"),
  ]),

  // About Me
  new Directory("about_me", [
    new File("music"),
  ]),

  new File("plans"),
  new File("changelog"),

])

// -- File Creation
// File names are case sensitive
// Directory names are used for physical file paths
// File names are used for URL name but not strictly for file names
