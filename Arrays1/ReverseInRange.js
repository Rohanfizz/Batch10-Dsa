var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function swap(arr, l, r) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
function reverseInRange(arr, l, r) {
    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}
reverseInRange(arr, 2, 5);
console.log(arr);
