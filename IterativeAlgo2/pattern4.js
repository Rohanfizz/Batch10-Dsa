var n = 45;
var stars = n;
var spaces = 0;
for (var i = 1; i <= n; i++) {
    var s = "";
    //first half spaces
    for (var j = 1; j <= spaces / 2; j++) {
        s += " ";
    }
    //all the stars
    for (var j = 1; j <= stars; j++) {
        s += "*";
    }
    //Second half of spaces - Ill not be printing the remaining spaces
    console.log(s);
    if (i <= n / 2) {
        //diff behaviour
        stars -= 2;
        spaces += 2;
    }
    else {
        //diff behaviour
        stars += 2;
        spaces -= 2;
    }
}
