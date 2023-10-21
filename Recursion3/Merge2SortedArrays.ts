let arr1 = [10, 20, 30, 40, 50];
let arr2 = [15, 25, 35, 45, 55, 67, 78];

function merge2SortedArrays(arr1: number[], arr2: number[]): number[] {
    let ans: number[] = [];
    //Fill the answer array

    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }else{
            ans.push(arr2[j]);
            j++;
        }
    }
    //if j goes out of bounds, j has nothing left
    while(i<arr1.length){
        ans.push(arr1[i]);
        i++;
    }
    //if i goes out of bounds, i has nothing left
    while(j<arr2.length){
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}
let finalAnswer = merge2SortedArrays(arr1,arr2);
console.log(finalAnswer);

