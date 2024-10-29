//var ww = window.outerWidth;
//var hh = window.outerHeight;
let ww = window.innerWidth;
let hh = window.innerHeight;
console.log("W: " + ww);
console.log("H: " + hh);
var typeDevice;
if (ww >= 960) {
  typeDevice = "desktop";
} else {

  typeDevice = "smart";
}