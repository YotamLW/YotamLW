// -- Notes for creating paths
// create file > add below > add parent link
// create html content and / or js code file
// add name to appropriate path in below `root` object for page validation
// names are case sensitive, can repeat names in different directories, cannot have file and directory with same name in the same parent directory
// add link from parent page to added page
// link names must be `/file` for root or `file` to append to current path

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
