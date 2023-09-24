let arr: number[] = [2, 8, 11, 15, 22, 32, 47, 49, 51, 66, 72];

function getCeil(arr,target):number{
    let l = 0;
    let r = arr.length-1;
    let ceil = -1;  

    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            return arr[mid];
        }else if(arr[mid] < target){
            l = mid+1;
        }else if(arr[mid] > target){
            ceil = arr[mid];
            r = mid-1;
        }
    }
    return ceil;
}
console.log(getCeil(arr,73))