var array = [10, 20, 30, 40];

var a = array.map(test);
document.write(a + "<br><br>")
function test(x){
    return x * 10;
}

var ary = [
    {fname : "Ahmad" , lname : "Shahid"},
    {fname : "Azan" , lname : "Shahid"},
    {fname : "Hussnain" , lname : "Shahid"},
];
var b = ary.map(check);
document.write(b)
function check(y){
    return y.fname + " " + y.lname;
}
