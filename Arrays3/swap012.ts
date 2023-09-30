let arr1 = [0,1,0,2,2,0,1,1,2,0,0,0,1,2,2,1,0];

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function swap012(arr:number[]) : void {
    let i = 0;
    let j = 0;
    let k = arr.length-1;
    while(i<=k){
        if(arr[i]  == 1) i++;
        else if(arr[i] == 0){
            swap(arr,i,j);
            i++;
            j++;
        }else if(arr[i] == 2){
            swap(arr,i,k);
            k--;
        }
    }
}
swap012(arr1)
console.log(arr1);
