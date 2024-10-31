



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

  addOnClick(value){
      document.getElementById(this.ID).setAttribute("onclick", value); 
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

class B_Offcanvas_Dark_Navbar {
  constructor(ID){
    this._menuItemsli = new Array(0);
    this._menuItemsEl = new Array(0);
    this._menuItemsID = new Array(0);
    this.ID = ID;
    this.Brand = "";  // Uzraksts redzams pie aizverta
    this.Brand_ID;
    this.Title = "";  // Uzraksts redzams pie atverta
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
    this.Brand_ID = this.ID + "e";
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
    this.Title_ID = "offcanvasDarkNavbarLabel";

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

setBrand(txt){
  this.Brand = txt;
  console.log(this.Brand);
  document.getElementById(this.Brand_ID).innerHTML = this.Brand;
}
setTitle(txt){
  this.Title = txt;
  document.getElementById(this.Title_ID).innerHTML = this.Title;
}

}
  //________________________________________________________________________
/*
<div class="container">

<div class="row">

  <div class="col-12 col-lg-6">
    <center>





      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">

            <img src="/foto/013001.png" class="d-block" style="height: 627px;" alt="...">

          </div>
          <div class="carousel-item">
            <img src="/foto/013002.png" class="d-block" style="height: 627px;" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/foto/013003.png" class="d-block" style="height: 627px;" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>





    </center>
  </div>


  <div class="col-12 col-lg-6">
    <center>
      <div id="2carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#2carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#2carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#2carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/foto/011501.png" class="d-block" style="height: 627px;" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/foto/011502.png" class="d-block" height="627" style="height: 627px;" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/foto/011503.png" class="d-block" height="627" style="height: 627px;" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#2carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#2carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </center>
  </div>
  
</div>


</div>

*/
//_________________________________________________________________________________________

/*

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
---------------------------------------- id -------------------------------------------------------------------------------

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  --------------------------------------- id ------------------------------------------------------------------------------
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  --------------------------------------------------------------------------------------------------------------------
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  -----------------------------------------------------------------------------------------------------------------------
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  -----------------------------------------------------------------------------------------------------------------------
</div>

*/



class Slide{
  constructor(ID){
    this.ID = ID;
    this.slideItems = 0;
    this.isFirstItems = true;
    this.IndicataorID = this.ID + "indikator";
    this.CaruselInerID = this.ID + "Iner";
    this.btnPrevID = this.ID + "btnPrew";
    this.btnNextID = this.ID + "btnNext";
    this.Indicator = new Array(0);
    this.Items = new Array(0);
    this.ItemsElements = new Array(0);

    //____________________ Galvenais ____________________________________
    this.carusel = document.createElement("div");
    this.carusel.setAttribute("id", this.ID);
    this.carusel.classList.add("carousel slide");
    this.carusel.setAttribute("data-bs-ride", "true");

    //_____________________ Saraksts ar indikatoriem _______________________________________________
    this.indikatosr = document.createElement("div");
    this.indikatosr.setAttribute("id", this.IndicataorID);
    this.indikatosr.classList.add("carousel-indicators");

    //______________________ elementi _________________________________________________
    this.iner = document.createElement("div");
    this.iner.setAttribute("id", this.CaruselInerID);
    this.iner.classList.add("carousel-inner");

    //_____________________ poga atpakal _____________________________________________
    this.btnPrev = document.createElement("btn");
    this.btnPrev.classList.add("carousel-control-prev");
    this.btnPrev.setAttribute("type", "button");
    this.btnPrev.setAttribute("data-bs-target", "#" + this.ID);
    this.btnPrev.setAttribute("data-bs-slide", "prev");
    
    this.sp1Prev = document.createElement("span");
    this.sp1Prev.classList.add("carousel-control-prev-icon");
    this.sp1Prev.setAttribute("aria-hidden", "true");

    this.sp2Prev = document.createElement("span");
    this.sp2Prev.classList.add("visually-hidden");
    this.sp2Prev.innerHTML = "Previous";

    //_____________________ poga uz prieksu _____________________________________________
    this.btnPrev = document.createElement("btn");
    this.btnPrev.classList.add("carousel-control-next");
    this.btnPrev.setAttribute("type", "button");
    this.btnPrev.setAttribute("data-bs-target", "#" + this.ID);
    this.btnPrev.setAttribute("data-bs-slide", "next");
    
    this.sp1Prev = document.createElement("span");
    this.sp1Prev.classList.add("carousel-control-next-icon");
    this.sp1Prev.setAttribute("aria-hidden", "true");

    this.sp2Prev = document.createElement("span");
    this.sp2Prev.classList.add("visually-hidden");
    this.sp2Prev.innerHTML = "Next";
  }

  addItems(element){

    if(this.isFirstItems){
      this.isFirstItems = false;
      let it = document.createElement("button");
      it.setAttribute("id", this.CaruselInerID);
      it.setAttribute("type", "button");
      it.setAttribute("data-bs-target", "#" + this.ID);
      it.setAttribute("data-bs-slide-to", this.slideItems.toString());
      this.slideItems++;
      it.classList.add("active");
      it.setAttribute("aria-current", "true");
      it.setAttribute("aria-label", "Slide " + (this.slideItems.toString() + 1));
      this.Indicator.push(it);

      let itElement = document.createElement("div");
      itElement.classList.add("carousel-item");
      inElement.classList.add("active");
      this.ItemsElements.push(element);
    }else{
      this.isFirstItems = false;
      let it = document.createElement("button");
      it.setAttribute("id", this.CaruselInerID);
      it.setAttribute("type", "button");
      it.setAttribute("data-bs-target", "#" + this.ID);
      it.setAttribute("data-bs-slide-to", this.slideItems.toString());
      this.slideItems++;
      it.setAttribute("aria-label", "Slide " + (this.slideItems.toString() + 1));
      this.Indicator.push(it);

      let itElement = document.createElement("div");
      itElement.classList.add("carousel-item");
      this.ItemsElements.push(element);
    }

  }

  show(){
    if(this.this.Items.length > 0){
      for(let i = 0; i < this.this.Items.length; i++){
        document.getElementById(this.this.IndicataorID).appendChild(this.Indicator[i]);
        document.getElementById(this.CaruselInerID).appendChild(this.Items[i]);
        document.getElementById(this.Items[i].ID).appendChild(this.ItemsElements[i]); 

      }
    }
  }
}