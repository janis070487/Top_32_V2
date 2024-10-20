



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

      <!--q-->
      
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <!--w-->
        <div class="container-fluid">
          <!--e-->
          <a class="navbar-brand" href="#">Top 32</a>
          <!--r -->
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <!--t-->
            <span class="navbar-toggler-icon"></span>
          </button>
          <!--y-->
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <!--u-->
            <div class="offcanvas-header">
              <!--i-->
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Top 32 Izvēle</h5>
              <!--o-->
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <!--p-->
            <div class="offcanvas-body">
              <!--a-->
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
  constructor(ID){
    this._menuItemsli = new Array(0);
    this._menuItemsEl = new Array(0);
    this._menuItemsID = new Array(0);
    this.ID = ID;
    this.Brand = " ";  // Uzraksts redzams pie aizverta
    this.Brand_ID;
    this.Title = " ";  // Uzraksts redzams pie atverta
    this.Title_ID;
    this.q = document.createElement("nav");         //________________ Paradit 1. ________________
    this.q.setAttribute("id", this.ID + "q");
    this.q_classList = this.q.classList;
    this.q_classList.add("navbar");
    this.q_classList.add("navbar-dark");
    this.q_classList.add("bg-dark");
    this.q_classList.add("fixed-top");

    this.w = document.createElement("div");         //________________ Paradit 2. ________________
    this.w.setAttribute("id", this.ID + "w");
    this.w_classList = this.w.classList;
    this.w_classList.add("container-fluid");

    this.e = document.createElement("a");           //________________ Paradit 3. ________________
    this.e.setAttribute("id", this.ID + "e");
    this.e_classList = this.e.classList;
    this.e_classList.add("navbar-brand");
    this.e.setAttribute("href", "e");           // pec tam papildinat

    this.r = document.createElement("button");           //________________ Paradit 4. ________________
    this.r.setAttribute("id", this.ID + "r");
    this.r_classList = this.r.classList;
    this.r_classList.add("navbar-toggler");
    this.r.setAttribute("type", "button");
    this.r.setAttribute("data-bs-toggle", "offcanvas");
    this.r.setAttribute("data-bs-target", "#offcanvasDarkNavbar");
    this.r.setAttribute("aria-controls", "offcanvasDarkNavbar");
    this.r.setAttribute("aria-label", "Toggle navigation");
    
    this.t = document.createElement("span");           //________________ Paradit 6. ________________
    this.t.setAttribute("id", this.ID + "t");
    this.t_classList = this.t.classList;
    this.t_classList.add("navbar-toggler-icon");

    this.y = document.createElement("div");           //________________ Paradit 5. ________________
    this.y_classList = this.y.classList;
    this.y_classList.add("offcanvas");
    this.y_classList.add("offcanvas-end");
    this.y_classList.add("text-bg-dark");
    this.y.setAttribute("tabindex", "-1");
    this.y.setAttribute("id", "offcanvasDarkNavbar");
    this.y.setAttribute("aria-labelledby", "offcanvasDarkNavbarLabel");

    this.u = document.createElement("div");           //________________ Paradit 7. ________________
    this.u.setAttribute("id", this.ID + "u");
    this.u_classList = this.u.classList;
    this.u_classList.add("offcanvas-header");

    this.i = document.createElement("h5");           //________________ Paradit 9. ________________
    this.i_classList = this.i.classList;
    this.i_classList.add("offcanvas-title");
    this.i.setAttribute("id", "offcanvasDarkNavbarLabel");

    this.o = document.createElement("buttonn");           //________________ Paradit 10. ________________
    this.o.setAttribute("id", this.ID + "o");
    this.o.setAttribute("type", "button");
    this.o_classList = this.o.classList;
    this.o_classList.add("btn-close");
    this.o_classList.add("btn-close-white");
    this.o.setAttribute("data-bs-dismiss", "offcanvas");
    this.o.setAttribute("aria-label", "Close");

    this.p = document.createElement("div");           //________________ Paradit 8. ________________
    this.p.setAttribute("id", this.ID + "p");
    this.p_classList = this.p.classList;
    this.p_classList.add("offcanvas-body");

    this.a = document.createElement("ul");           //________________ Paradit 11. ________________
    this.a.setAttribute("id", this.ID + "a");
    this.a_classList = this.a.classList;
    this.a_classList.add("navbar-nav");
    this.a_classList.add("justify-content-end");
    this.a_classList.add("flex-grow-1");
    this.a_classList.add("pe-3");


/*
    this.q = document.createElement("nav");               ________________ Paradit 1.  ________________
      this.w = document.createElement("div");             ________________ Paradit 2.  ________________
        this.e = document.createElement("a");             ________________ Paradit 3.  ________________
        this.r = document.createElement("button");        ________________ Paradit 4.  ________________
          this.t = document.createElement("span");        ________________ Paradit 6.  ________________
        this.y = document.createElement("div");           ________________ Paradit 5.  ________________
          this.u = document.createElement("div");         ________________ Paradit 7.  ________________
            this.i = document.createElement("h5");        ________________ Paradit 9.  ________________
            this.o = document.createElement("button");    ________________ Paradit 10. ________________
          this.p = document.createElement("div");         ________________ Paradit 8.  ________________
            this.a = document.createElement("ul");        ________________ Paradit 11. ________________
  */
            
  }
  
    
  show(parentName = " "){
      
    document.getElementById(parentName   ).appendChild(this.q); //1
    document.getElementById(this.ID + "q").appendChild(this.w); //2
    document.getElementById(this.ID + "w").appendChild(this.e); //3
    document.getElementById(this.ID + "w").appendChild(this.r); //4
    document.getElementById(this.ID + "r").appendChild(this.t); //6
    document.getElementById(this.ID + "w").appendChild(this.y); //5
    document.getElementById("offcanvasDarkNavbar").appendChild(this.u); //7
    document.getElementById(this.ID + "u").appendChild(this.i); //9
    document.getElementById(this.ID + "u").appendChild(this.o); //10
    document.getElementById("offcanvasDarkNavbar").appendChild(this.p); //8
    document.getElementById(this.ID + "p").appendChild(this.a); //11

    if(this._menuItemsEl.length > 0){
      for(let i = 0; i < this._menuItemsEl.length; i++){
        document.getElementById(this.ID + "a").appendChild(this._menuItemsli[i]); 
        this._menuItemsEl[i].show(this._menuItemsID[i]);
      }
    }
    
}
/**
 * Pievieno objektus kas tiks pievienoti menu
 * @param {object} ele objekts kam ir metode show 
 */
addMenu(ele){
    let p = document.createElement("li");          
    p.setAttribute("id", ele.ID + "p");
    this._menuItemsID.push(ele.ID + "p")
    let pp_classList = this.p.classList;
    pp_classList.add("nav-item");
    this._menuItemsEl.push(ele);
    this._menuItemsli.push(p);
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