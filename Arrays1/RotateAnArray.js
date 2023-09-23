var arr = [1, 2, 3, 4, 5];
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
function rotateArray(arr, k) {
    var n = arr.length;
    k = k % n;
    reverseInRange(arr, n - k, n - 1);
    reverseInRange(arr, 0, n - k - 1);
    reverseInRange(arr, 0, n - 1);
}
rotateArray(arr, 11);
console.log(arr);
