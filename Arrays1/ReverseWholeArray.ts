let arr : number[] = [2,4,3,5,1,6,7];

function swap(arr,l,r){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

function reverseWholeArray(arr : number[]) : void{
    let n = arr.length;
    let l = 0;
    let r = n-1;
    while(l<r){
        swap(arr,l,r);
        l++;
        r--;
    }
}


reverseWholeArray(arr);
console.log(arr);
