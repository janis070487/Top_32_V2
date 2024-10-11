var ww = window.outerWidth;
var hh = window.outerHeight;

var typeDevice;
if(ww >= 960)
{
  typeDevice = "desktop";
}else
 {

  typeDevice = "smart";
  }




  function SetSize()
  {
    if(typeDevice == "smart")
    {
      return (hh / 2);
    }else
    {
      return (hh - 120);
    }
  }