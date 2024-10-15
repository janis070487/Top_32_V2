function SetSize()
  {
    if(typeDevice == "smart")
    {
      return (hh / 2);
      //return hh;
      //console.log(img.style.height);
    }else
    {
      return (hh - 120);
     // return hh;
      //console.log(img.style.height);
    }
  }