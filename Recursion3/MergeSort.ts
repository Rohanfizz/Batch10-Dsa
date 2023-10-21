function merge2SortedArrays(arr1: number[], arr2: number[]): number[] {
    let ans: number[] = [];
    //Fill the answer array

    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    //if j goes out of bounds, j has nothing left
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    //if i goes out of bounds, i has nothing left
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}

function mergeSort(arr: number[], lower: number, upper: number): number[] {
    //base case
    if(lower == upper){
        return [arr[lower]];
    }

    let mid = Math.floor((lower+upper)/2);//Mid
    let left = mergeSort(arr,lower,mid);//get from left
    let right = mergeSort(arr,mid+1,upper);//get from right
    let ans = merge2SortedArrays(left,right);//merge left and right
    return ans;//return
}

let arr = [1,2,5,3,7,4,49,30,2,12,3,352,456,62,3];
console.log(mergeSort(arr,0,arr.length-1));
