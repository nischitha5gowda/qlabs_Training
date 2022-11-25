 function calculate()
{  
    
    var kan=parseFloat(document.getElementById(kan).value);
    
        if(kan<0 && kan>125)
    {
        alert("please enter valid marks");}
    var eng=parseFloat(document.getElementById(eng).value);
    
        if(eng<0 && eng>100)
    {
        alert("please enter valid number");}
    
    var hindi=parseFloat(document.getElementById(hindi).value);
    if(hindi<0 && hindi>100)
    {
        alert("please enter valid number");}

    var maths=parseFloat(document.getElementById(math).value);
    if(maths<0 && maths>100)
    {
        alert("please enter valid number");}
    var science=parseFloat(document.getElementById(science).value);
    if(science<0 && science>100)
    {
        alert("please enter valid number");}
    var social=parseFloat(document.getElementById(social).value);
    if(social<0 && social>100)
    {
        alert("please enter valid number");}
    var total=kan+eng+hindi+maths+science+social;
    var avg=total/625*100;
    
}
