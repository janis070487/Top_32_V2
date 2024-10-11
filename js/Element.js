
class Element{
  constructor(name_ID, parentName_ID){
    this.name;
    this.parentName;
    this.element;
    this.type;
    this.class;
    this.id;
    this.ref;
    this.txt;
    this.value;
  }


}




/*

class Element
{
//__________________________________________________
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
  }
  //__________________________________________________
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
  None()
  {

  }
  //__________________________________________________
  Reset()
  {
    this._classResult = "";
  }
  //__________________________________________________
  DeleteToDisplay()
  {

  }
  //__________________________________________________
};

*/