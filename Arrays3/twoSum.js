var arr = [2, 9, 3, 2, 14, 12, 4];
function approach1(arr, target) {
    arr.sort(function (a, b) { return a - b; });
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var currSum = arr[l] + arr[r];
        if (currSum == target) {
            return [arr[l], arr[r]];
        }
        else if (currSum < target) {
            l++;
        }
        else if (currSum > target) {
            r--;
        }
    }
    return [-1];
}
console.log(approach1(arr, 15));
