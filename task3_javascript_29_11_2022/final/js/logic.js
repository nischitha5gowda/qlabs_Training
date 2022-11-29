function calculation() {
  var a,
    b,
    num,
    temp = 0;
  res = 0;
  num = parseInt(document.getElementById("num").value);
  b = num;
  var total=" ";
 while (num != 0) {
    a = num % 10;
    console.log(a);
    num = parseInt(num / 10);
    // temp = temp * 10 + a;
    // console.log(num);
    switch (a) {
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


// }
// var num=prompt("enter a value")
// var length=num.length;
// for(var i=0; i<length;i++)
// {
//     switch(num[i])
//     {
//         case 0:
//             res=
//     }
// }
