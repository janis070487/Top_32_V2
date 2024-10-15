
class _col{
  constructor(name_ID, parentName_ID){
    this.Id = name_ID;
    this.parent_ID = parentName_ID;
    this.class = new Array(0);
    this.element = new Array(0);
  }
}

/*
class Col
{
//__________________________________________________
  constructor(name, parentName)
  {

    this.col = "";
    this.sm = "";
    this.md = "";
    this.lg = "";
    this.xl = "";

    this.isCenterId = "";
    this.iscenter;
    this.name = name;
    this.parentName = parentName;
    this._classResult = "";
    this._class = new Array(0);
    //this._class.push("col ");
    this._atribute = new Array(0);
    this._atributeValue = new Array(0);
    this._style = new Array(0);

  }
  //__________________________________________________
  SetGridClass()
  {
    if(this.col !== ""){this._class.push(this.col);}
    if(this.sm !==  ""){this._class.push(this.sm);  }
    if(this.md !==  ""){this._class.push(this.md); }
    if(this.lg !==  ""){this._class.push(this.lg); }
    if(this.xl !==  ""){this._class.push(this.xl); }
  }
  Show()
  {
    if(this.iscenter)
    {
      this.isCenterId = this.name;
      this.name = this.name + "_";

    }

    var element = document.createElement('div');
    element.setAttribute("id", this.name);
    this.SetGridClass();
    for(let i = 0; i < this._class.length; i++)
      {
        this._classResult = this._classResult + this._class[i];
      }

    element.setAttribute("class", this._classResult);
    for(let i = 0; i < this._atribute.length; i++)
      {
        element.setAttribute(this._atribute[i], this._atributeValue[i]);
      }
    //console.log(this.parentName);
        document.getElementById(this.parentName).appendChild(element);
        if(this.iscenter)
        {
          var center = document.createElement('center');
          center.setAttribute("id", this.isCenterId);
          document.getElementById(this.name).appendChild(center);
        }
  }
  //__________________________________________________
  None()
  {

  }
  //__________________________________________________
  Reset()
  {
    if(this.iscenter)
    {
      this.name = this.isCenterId;
      this.isCenterId = "";
      this._classResult = "";
    }
      this._class = new Array(0);
  }
  //__________________________________________________
  DeleteToDisplay()
  {

  }
}
//__________________________________________________
//__________________________________________________
*/