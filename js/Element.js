
/**
 * dddd
 */

//_________________________________________________________________________________________

class _Element {
  constructor(ID, parentName, type){
    this.ID = ID;
    this.parentName = parentName;
    this.type = type;
    this._atribute = new Array(0);
    this._atributeValue = new Array(0);
    this._class = new Array(0);
  }
  show(){

  }
  addClass(how){
    this._class.push(how);
  }
}

//_________________________________________________________________________________________

class B_Element_BTN extends _Element {
  constructor(ID, parentName){
    this.ID = ID;
    this.parentName =parentName;
  }
}

//_________________________________________________________________________________________


/*
q   <nav class="navbar navbar-dark bg-dark fixed-top">
w   <div class="container-fluid">
e     <a class="navbar-brand" href="#">Top 32</a>
r     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
t       <span class="navbar-toggler-icon"></span>
  </button>
y     <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
u       <div class="offcanvas-header">
!      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>   virsraksts
i         <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
o       <div class="offcanvas-body">
p        <ul class="navbar-nav justify-content-end flex-grow-1 pe-2">
     


        <li class="nav-item">
          <button type="button" class="btn btn-outline-secondary">Home</button>
        </li>

    
      </ul> 
    </div>
  </div>

</div>

</nav>
*/

class B_Offcanvas_Dark_Navbar extends _Element {

  constructor(ID, parentName){
    this.ID = ID;
    this.parentName =parentName;
    this._element = new Array(0);
    this._id_breakpoint = new Array(0);  // 

    let q = new _Element(this.ID + "q", ID, "nav")
    q.addClass("navbar");
    q.addClass("navbar-dark");
    q.addClass("fixed-top");
    this._element.push(q);
    
    let w = new _Element(this.ID + "w", this.ID + "q", "div");
    w.addClass("container-fluid");
    this._element.push(w);
    


  }

  addMenu(){

  }
}

//_________________________________________________________________________________________




/*
class _Element
{
//__________________
  constructor(name, parentName, type)
  {
  this.name = name;
  this.type = type;
    this.parentName = parentName;
    this._class = new Array(0);
    this._classResult = "";
    this._atribute = new Array(0);
    this._atributeValue = new Array(0);
    this._style = new Array(0);
    this._style = new Array(0);
    this.txt;
  }
  
  
  AddAtribute(atribute, value){
    this._atribute.push(atribute);
    this._atributeValue.push(value);
  }
  //__________________
  Show()
  {
    var element = document.createElement(this.type);
    element.setAttribute("id", this.name);

    for(let i = 0; i < this._class.length; i++)
      {
        this._classResult = this._classResult + this._class[i];
      }

    element.setAttribute("class", this._classResult);

    for(let i = 0; i < this._atribute.length; i++)
      {
        element.setAttribute(this._atribute[i], this._atributeValue[i]);
      }
        document.getElementById(this.parentName).appendChild(element);
  }
  //__________________
  Reset()
  {
    this._classResult = "";
  }
  //__________________
  DeleteToDisplay()
  {
    const element = document.getElementById(this.name);
      element.remove();
  }
  //__________________
}

*/