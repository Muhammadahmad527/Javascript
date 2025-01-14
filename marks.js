function key() {
    var a = confirm("How's look my web page")
    if (a) {
        alert("Thanks")
    } else {
        prompt("Please Enter your problem")
    }
}
document.write("<br>");


var month = 1;
switch (month) {
    case 1:
        document.write("January")
        break;
    case 2:
        document.write("Feb")
        break;
    case 3:
        document.write("March")
        break;
    case 4:
        document.write("April")
        break;
    case 5:
        document.write("May")
        break;
    case 6:
        document.write("June")
        break;
    case 7:
        document.write("July")
        break;
    case 8:
        document.write("Aug")
        break;
    case 9:
        document.write("Sep")
        break;
    case 10:
        document.write("Oct")
        break;
    case 11:
        document.write("Nov")
        break;
    case 12:
        document.write("Dec")
        break;


    default:
        document.write("Please Enter Valid Number")
        break;
}
document.write("<br>");
document.write("<br>");

var x = 100;
var y = "100";
var t = 100;
var z;

z = (x === t) || (y === t) ? "True" : "False";
document.write(z)
document.write("<br>");
document.write("<br>");

// for (let q = 1; q <= 5; q++) {
//     if (q == 3) {
//         document.write(q + ": Hey<br>");
//         break;
//     }
//     document.write(q + ": this is true<br>")
// }
document.write("<br>");
document.write("<br>");

