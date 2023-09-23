var arr = [1, 2, 3, 4, 5, 1, 5, 4, 3, 2, 1];
function maxEle(arr) {
    var n = arr.length;
    var maxi = -Infinity;
    for (var i = 0; i < n; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
}
function barChartPrinter(arr) {
    var n = arr.length;
    //We want to find the height of the pattern,
    //And the height of pattern = maximum element of the array
    var maxi = maxEle(arr);
    for (var i = maxi; i > 0; i--) {
        var s = "";
        for (var j = 0; j < n; j++) {
            if (arr[j] >= i)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
barChartPrinter(arr);
