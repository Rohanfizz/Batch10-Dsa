var n = 11;
var stars = 1;
var spaces = Math.floor(n / 2);
for (var i = 1; i <= n; i++) {
    var s = "";
    for (var j = 1; j <= spaces; j++)
        s += " ";
    for (var j = 1; j <= stars; j++)
        s += "*";
    console.log(s);
    if (i <= n / 2) {
        stars += 2;
        spaces -= 1;
    }
    else {
        stars -= 2;
        spaces += 1;
    }
}
