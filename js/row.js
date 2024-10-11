
class row{
  constructor(name_ID, parentName_ID){
    this.Id = name_ID;
    this.parent_ID = parentName_ID;
    this.class = new Array(0);
    this.col = new Array(0);
  }
}





/*

class Row
{
  //__________________________________________________v
  constructor(name, parentName)
  {
    this.name = name;
    this.parentName = parentName;
    this._classResult = "";
    this._class = new Array(0);
    this._class.push("row ");
    this._atribute = new Array(0);
    this._atributeValue = new Array(0);
    this._style = new Array(0);
  }
  //__________________________________________________
  Show()
  {
    var element = document.createElement('div');
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
//__________________________________________________
  None()
  {

  }
  Reset()
  {
    this._classResult = "";
  }
  DeleteToDisplay()
  {

  }
}

*/