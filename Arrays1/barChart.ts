let arr : number[] = [4,2,3,5,1,6];

function maxEle(arr) : number {
    let n = arr.length;
    let maxi = -Infinity;
    for(let i = 0;i<n;i++){
        if(arr[i] > maxi){
            maxi = arr[i];
        }
    }
    return maxi;
}

function barChartPrinter(arr){
    let n = arr.length;

    //We want to find the height of the pattern,
    //And the height of pattern = maximum element of the array
    let maxi  = maxEle(arr);
    
    for(let i = maxi;i>0;i--){
        let s = "";
        for(let j = 0;j<n;j++){
            if(arr[j] >= i) s+="*";
            else s+=" ";
        }
        console.log(s);
    }
}

barChartPrinter(arr);