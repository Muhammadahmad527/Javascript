// var a = prompt("Enter your Name");

// if(a) {
//    alert("Thanks");
// }else{
//    alert("Sorry")
// }

function hello(fname = "Ahmad", lname = " Shahid") {
  document.write("Hello " + fname + lname + "<br>");
}

function sum(a, b) {
  document.write(a + b);
}

hello("Azan", " Shahid");
hello("Azan", " Shahid");

sum(20, 30);

function fullname(fname = "Ahmed", lname = "Shahid") {
  var a = fname + " " + lname;

  return a;
}

var fn = fullname("Azan", "Shahid");
document.write(fn);

function value() {
  document.write("This is Sample");
  document.write("<br>");
  document.write("<br>");
}

value();

function sample(fname = "Azan", lname = "Shahid") {
  document.write("Hello " + fname + lname);
}

sample("Muhammad ", "Ahmad");
document.write("<br>");
document.write("<br>");

function marks(eng, math, sc) {
  var a = eng + math + sc;

  return a;
}

function per(tm) {
  var per = tm / 300 * 100;

  document.write(per);
}

var total = 10 + 10 + 45;
per(total);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

var roll = 1;

switch (roll) {
  case 1:
  case 2:
  case 3:
    document.write("A+ Plus");
    break;

  default:
    document.write("Please Enter Valid Roll Number");
    break;
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

function enter(fname = "Hussnain ", lname = "Shahid") {
  document.write(fname + " " + lname);
}

enter();

document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("<br>");
document.write("<br>");
document.write("<br>");

function add(fname, lname) {
  document.write("Hello " + fname + " " + lname);
}

add("Ahmad", "Shahid");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


function key() {
  alert("Hello Everyone")
}


