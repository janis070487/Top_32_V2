



//_________________________________________________________________________________________


/**
 * Izveido Bootstram pogu
 * @param {string} ID pievieno objekta idetifikators
 * @param {string} color pievieno pogas krasu 
 * iespejamie varianti:
 * Primary, Secondary, Success, Danger, Warning, Info, Light, Dark
 * @param {string} TextNode Iestata pogas uzrakstu - Pec noklusejuma: " "
 */
class B_Outline_buttons {
  constructor(ID, color, TextNode=" "){
    
    this.ID = ID;
    this.parentName;
    this.TextNode = TextNode;
    this._element = document.createElement("button");
    this._element.setAttribute("type", "button");
    this._element.setAttribute("id", ID);
    let textNode = document.createTextNode(TextNode);
    this._element.appendChild(textNode);
    let _classList = this._element.classList;
    _classList.add("btn");
     switch (color) {
       case "Primary":
         _classList.add("btn-outline-primary");
       break;
      case "Secondary":
        _classList.add("btn-outline-secondary");
        break;
      case "Success":
        _classList.add("btn-outline-success");
        break;
      case "Danger":
        _classList.add("btn-outline-danger");
        break;
      case "Warning":
        _classList.add("btn-outline-warning");
        break;
      case "Info":
        _classList.add("btn-outline-info");
        break;
      case "Light":
        _classList.add("btn-outline-light");
        break;
      case "Dark":
        _classList.add("btn-outline-dark");
        break;
        default:
          _classList.add("btn-outline-secondary");
          break;
     }
   
  }

  
  /**
   * 
   * @param {string} parentName elementa identifikators kur elements tiks ievietots
   */
  show(parentName = " "){
      
      document.getElementById(parentName).appendChild(this._element);
  }

  
}


//_________________________________________________________________________________________


/*

*/
//_____________________________________ Turpinam so ___________________________________
/*

<nav class="navbar navbar-dark bg-dark fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Top 32</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Top 32 Izvēle</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

        <li class="nav-item">
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
        </li>

        <li class="nav-item">
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
        </li>

        <li class="nav-item">
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        </li>

        <li class="nav-item">
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        </li>
       
      </ul>
      
    </div>
  </div>
</div>
</nav>

*/

class B_Offcanvas_Dark_Navbar {

  
    


  

  addMenu(){

  }
}
  //________________________________________________________________________
  

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