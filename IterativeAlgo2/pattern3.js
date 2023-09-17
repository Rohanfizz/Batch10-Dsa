var n = 5;
for (var i = 1; i <= n; i++) {
    var s = "";
    var stars = i;
    var spaces = n - i;
    for (var j = 1; j <= spaces; j++) {
        s += " ";
    }
    for (var j = 1; j <= stars; j++) {
        s += "*";
    }
    console.log(s);
}
