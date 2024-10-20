/*
let el1 = new _Element("Foto1", "sakums", "img");
el1.AddAtribute("src", "foto/011202.png");



let text = "";
for (let x in _Element) {
  text += _Element[x] + " ";
};

// Display the Text
*/



// let el1 = new _Element("BT1", "start", "button");
// el1.addAtribute("type", "button");
// el1.addClass("btn");
// el1.addClass("btn-outline-secondary");
// el1._node = "Janis";
// el1.show();

//  <button type="button" class="btn btn-outline-secondary">Secondary</button>

let bt1 = new B_Outline_buttons("Test", "Secondary", "Janis");
let bt2 = new B_Outline_buttons("btn1", "Secondary", "Home");
//bt1.show("start");

let nav1 = new B_Offcanvas_Dark_Navbar("nav1");
nav1.addMenu(bt1);
nav1.addMenu(bt2);
nav1.show("start");
 
//document.getElementById("start").appendChild(para);