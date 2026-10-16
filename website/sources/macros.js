// HTML Elements
let banner = document.getElementById("banner")
let content = document.getElementById("content")
let navigator = document.getElementById("navigator")
let page = document.getElementById("page")

// Maths
function rt (i) {return Math.sqrt(i)}
function ab (i) {return Math.abs(i)}
function flr (i) {return Math.floor(i)}
function log (i) {return Math.log10(i)}
function exp (i) {return Math.exp(i)}
function ln (i) {return Math.log(i)}

const pi = Math.PI
function sin (x) {return Math.sin(x)}
function cos (x) {return Math.cos(x)}
function tan (x) {return Math.tan(x)}
function asin (x) {return Math.asin(x)}
function acos (x) {return Math.acos(x)}
function atan (x) {return Math.atan(x)}

function vectorScale (scale, a) {let b = []; for (let i = 0; i < a.length; i++) {b[i] = a[i] * scale}; return b}
function vectorSum (a) {let sum = 0; for (let i = 0; i < a.length; i++) {sum += a[i]}; return sum}
function vectorMod (a) {let sum = 0; for (let i = 0; i < a.length; i++) {sum += a[i] ** 2}; return rt(sum)}
function vectorAdd (a, b) {return a.map((value, i) => value + b[i])}
function vectorSub (a, b) {return a.map((value, i) => value - b[i])}
function vectorDot (a, b) {let sum = 0; for (let i = 0; i < a.length; i++) {sum += a[i] * b[i]}; return sum}
function vectorCross3 (a, b) {return [a[2]*b[3]-b[2]*a[3], a[3]*b[1]-b[3]*a[1], a[1]*b[2]-b[1]*a[2]]}

// Functions

function wrap (a, c) {return a.length ? c + a.join(c) + c : c}
