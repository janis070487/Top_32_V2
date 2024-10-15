

class Render_Bootstrap{
  constructor(){
    this._content = new Array(0)
  }




}





/*

class Render_Bootstrap{


constructor(){
this.container = new Array(0);
}

AddContainer(container){
  let result = false;
  for(let i = 0; i < this.container.length; i++){ //Parbaudam visus konteinerus masiva vai nav conteiners jau ar tadu ID
    if(this.container[i].ID === container.ID){    // Ja atrod tadu element tad partrauc skatities
       result = true;
       break;
    }
  }
  if(result){      // Ja rezult'ats bij pozitivs tad console izdruka par to
    console.log("Tads ID jau eksiste");
  }else{ 
    this.container.push(container);   // Ja tadu neatrada tad pievieno pie masiva
  }
}
*/
/*
       


 _____________________________ container _____________________________________________
|                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|   __________________________ Row_1 __________________________________               |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |   _______________________ col_1_1  __________                     |              |
|  |  |                                           |                    |              |
|  |  |   element_1                               |                    |              |
|  |  |   element_2                               |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  ____________________________________________                     |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |   _______________________ col_1_2  __________                     |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  ____________________________________________                     |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  _____________________________________________________________________              |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|   __________________________ Row_2 __________________________________               |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |   _______________________ col_2_1 ___________                     |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  ____________________________________________                     |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |   _______________________ col_2_2 ___________                     |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  |                                           |                    |              |
|  |  ____________________________________________                     |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  |                                                                   |              |
|  _____________________________________________________________________              |
|                                                                                     |
|                                                                                     |
|                                                                                     |
|                                                                                     |
_______________________________________________________________________________________

*/
/*

AddRow(kuru, kur){
  let result = false;
  //___________________________________________ 1 start _________________________________________
  for(let i = 0; i < this.container.length; i++){
    //__________________________________________ 2 start ________________________________________
    for(let ii = 0; ii < this.container[i].row.length; ii++){
      //_________________________________________ 3 start ________________________________________
      for(let iii = 0; iii < this.container[i].row[ii].element.length; iii++){
        if(this.container[i].row[ii].element.ID === kuru.ID){    // Ja atrod tadu element tad partrauc skatities
          result = true;
          break;
       }
      }
      //__________________________________________ 3 end _________________________________________
      if(this.container[i].row.ID === kuru.ID){    // Ja atrod tadu element tad partrauc skatities
        result = true;
        break;
     }
   }
   //______________________________________________ 2 end ________________________________________
   if(this.container.ID === kuru.ID){    // Ja atrod tadu element tad partrauc skatities
    result = true;
    break;
 }
}
//__________________________________________________ 1 end __________________________________________

if(result){      // Ja rezult'ats bij pozitivs tad console izdruka par to
  console.log("Tads ID jau eksiste");
}else{ 

  let number = 0;
  for(let i = 0; i < this.container.length; i++){
     if(this.container[i].ID === kur.ID){
      number = i;
     }
  }
  this.container[i].push(kuru);   // Ja tadu neatrada tad pievieno pie masiva
}


}

}




*/