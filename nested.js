let arr = [10, 20, 30];
var sum = 0;
for (var u = 0; u <= 2; u++) {
    document.write(arr[u] + "<br>")
    sum = sum + arr[u];
}

document.write("Total Marks" + sum)

document.write("<br>")
document.write("<br>")

for (var x = 1; x <= 100; x = x + 10) {
    for (var y = x; y < x + 10; y++) {
        document.write(y + " ")
    }
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")

for (var a = 1; a <= 5; a++) {
    for (var c = 1; c <= a; c++) {
        document.write(c + " ")
    } document.write("<br>")
}
document.write("<br>")
document.write("<br>")
document.write("<br>")

var ary = new Array(2);

for(var g = 0; g < 2; g++){
    ary [g] = prompt("Enter your name");
}

for(var w = 0; w < 2; w++){
    document.write(ary[w] + "<br>");
}

var array = [
    ["Sarah", 18, "Male", "B.COM"],
    ["Harry", 18, "Male", "BScs"],
    ["Ahmad", 18, "Male", "I.COM"],
    ["Azan", 18, "Male", "ICS"]
];

for(var n = 0; n < 4; n++){
    for(var m = 0; m < 4; m++){
        document.write(array[n][m])
    }
}

document.write("<br>")
document.write("<br>")

