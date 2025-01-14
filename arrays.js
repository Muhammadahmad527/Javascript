var ary = new Array(2);

for(var g = 0; g < 2; g++){
    ary[g] = prompt("Enter your name")
}

for(var c = 0; c < 2; c++){
    document.write(ary[c])
}

var array = [
    ["Sarah", 18, "Femala", "ICOM"],
    ["Azan", 18, "Male", "ICOM"],
    ["Arslan", 18, "Male", "ICOM"],
    ["Tayyab", 18, "Male", "ICOM"]
];

for(var a = 0; a < 4; a++){
    for(var b = 0; b < 4; b++){
        document.write(array[a][b])
    }
    
}
document.write("<br>")