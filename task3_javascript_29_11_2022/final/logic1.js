function calculation() {
    var total="";
    var res=0;
    // var num=0;
    var num = (document.getElementById("num").value);
    var length=num.length;
     for(var i=0; i<length;i++)
    {
    switch(parseInt(num[i])){
        case 0:
          res = "zero";
          break;
        case 1:
          res ="one";
          break;
        case 2:
          res = "two";
          break;
        case 3:
          res = "three";
          break;
        case 4:
          res =  "four";
          break;
        case 5:
          res = "five";
          break;
        case 6:
          res ="six";
          break;
        case 7:
          res ="seven";
          break;
        case 8:
          res = "eight";
          break;
        case 9:
          res = "nine";
          break;
        case 10:
          res = "ten";
          break;
        default:
          res = "not a valid number";
          break;
      }
          total=res+" "+total;
          console.log(total);
    }
    document.getElementById("n").innerHTML=total;
  }
 