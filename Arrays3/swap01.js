var arr = [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function swap01(arr) {
    var i = 0;
    var j = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            swap(arr, i, j);
            i++;
            j++;
        }
        else
            i++;
    }
}
swap01(arr);
console.log(arr);
