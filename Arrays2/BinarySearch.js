var arr = [2, 8, 11, 15, 22, 32, 47, 49, 51, 66, 72];
function binarySearch(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target) { //discard left half, as i am smaller, so all the people to my left will also be smaller
            l = mid + 1;
        }
        else if (arr[mid] > target) { // discard right half, as i am greater, so all the people to my right will also be greater
            r = mid - 1;
        }
    }
    return -1; //Element is not present in the array
}
console.log(binarySearch(arr, 109));
