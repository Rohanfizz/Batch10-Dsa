/**
 Do not return anything, modify matrix in-place instead.
 */

 function reverse(arr:  number[]){
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
}

function rotate(matrix: number[][]): void {
    let n= matrix.length;
    //Step1: Convert matrix to transposed form
    for(let i  = 0;i<n;i++){
        for(let j = i;j<n;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    //Step2: Reverse all rows
    for(let i = 0;i<n;i++){
        reverse(matrix[i]);
    }
};