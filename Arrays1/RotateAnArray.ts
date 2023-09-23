let arr: number[] = [1,2,3,4,5];

function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function reverseInRange(arr: number[], l: number, r: number): void {
    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}

function rotateArray(arr:number[],k:number){
    let n  = arr.length;
    k = k%n;
    reverseInRange(arr,n-k,n-1);
    reverseInRange(arr,0,n-k-1);
    reverseInRange(arr,0,n-1);
}

rotateArray(arr,11);
console.log(arr);
