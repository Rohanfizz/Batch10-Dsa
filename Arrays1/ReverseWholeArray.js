var arr = [2, 4, 3, 5, 1, 6, 7];
function swap(arr, l, r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
function reverseWholeArray(arr) {
    var n = arr.length;
    var l = 0;
    var r = n - 1;
    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}
reverseWholeArray(arr);
console.log(arr);
