function calculation() {
  var a,
    b,
    num,
    temp = 0;
  num = parseInt(document.getElementById("num").value);
  b = num;
  while (num != 0) {
    a = num % 10;
    num = parseInt(num / 10);
    // document.getElementById("n").innerHTML = b;
    temp = temp * 10 + a;
  }
//   console.log(temp);

// var num = parseInt(document.getElementById("num").value);
var res = 0;
var num = b;
digitCount = 0;
while (num != 0) {
  digitCount = digitCount + 1;
  num = parseInt(num / 10);
}
num = b;
while (num != 0) {
  var rem = num % 10;
  res = res + Math.pow(parseInt(rem), digitCount);
  document.getElementById("n").innerHTML = b;
  num = parseInt(num / 10);
  console.log(digitCount);
}
if (res == b && temp == b) {
  document.getElementById("res").innerHTML =
    "number is a Armstrong number and palindrome number";
} else if (temp == b) {
  document.getElementById("res").innerHTML =
    "number is a palindrome number";
} else if (res == b) {
  document.getElementById("res").innerHTML =
    "the given number is Amstrong number";
} else {
  document.getElementById("res").innerHTML =
    "the given number is not a Amstromg and Palindrome number";
}
}
