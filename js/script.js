
var cero = document.getElementById("cero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equal = document.getElementById("equal");
var delete1 = document.getElementById("delete");
var square = document.getElementById("square");
var porcent = document.getElementById("porcent");
var squaring = document.getElementById("squaring");

const calculator = document.getElementById('calculator');
const resultBar = document.getElementById('result-bar')
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  calculator.classList.toggle('active');
  resultBar.classList.toggle('active');
  delete1.classList.toggle('active');
  square.classList.toggle('active');
  porcent.classList.toggle('active');
  divide.classList.toggle('active');
  multiply.classList.toggle('active');
  minus.classList.toggle('active');
  plus.classList.toggle('active');
  squaring.classList.toggle('active');
  equal.classList.toggle('active');
  cero.classList.toggle('active');
  one.classList.toggle('active');
  two.classList.toggle('active');
  three.classList.toggle('active');
  four.classList.toggle('active');
  five.classList.toggle('active');
  six.classList.toggle('active');
  seven.classList.toggle('active');
  eight.classList.toggle('active');
  nine.classList.toggle('active');
}

function Value(x) {
  document.getElementById("result").innerHTML += x;
}

function clear(x) {
  document.getElementById("result").innerHTML = "0";
}

function calculate() {
  var x = document.getElementById("result").innerHTML;
  var y = eval(x);
  document.getElementById("result").innerHTML = y;
}


cero.addEventListener("click", function () {
  Value(0);
});
one.addEventListener("click", function () {
  Value(1);
});
two.addEventListener("click", function () {
  Value(2);
});
three.addEventListener("click", function () {
  Value(3);
});
four.addEventListener("click", function () {
  Value(4);
});
five.addEventListener("click", function () {
  Value(5);
});
six.addEventListener("click", function () {
  Value(6);
});
seven.addEventListener("click", function () {
  Value(7);
});
eight.addEventListener("click", function () {
  Value(8);
});
nine.addEventListener("click", function () {
  Value(9);
});

plus.addEventListener("click", function () {
  Value("+");
});
minus.addEventListener("click", function () {
  Value("-");
});
multiply.addEventListener("click", function () {
  Value("*");
});
divide.addEventListener("click", function () {
  Value("/");
});
equal.addEventListener("click", function () {
  calculate();
});
delete1.addEventListener("click", function () {
  clear();
});

square.addEventListener("click", function () {
  var x = document.getElementById("result").innerHTML;
  var y = eval(x * x);
  document.getElementById("result").innerHTML = y;
});
porcent.addEventListener("click", function () {
  var x = document.getElementById("result").innerHTML;
  var y = eval(x / 100);
  document.getElementById("result").innerHTML = y;
});

squaring.addEventListener("click", function () {
  var x = document.getElementById("result").innerHTML;
  var y = eval(x * x * x);
  document.getElementById("result").innerHTML = y;
});
