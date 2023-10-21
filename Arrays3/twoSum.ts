let arr  = [2,9,3,2,14,12,4];
function twoSum(arr: number[], target: number): number[] {//TC:O(n),SC:o(n)
    let hashMap = {};

    for(let  i = 0;i<arr.length;i++){
        let  partner = target-arr[i];
        if(hashMap[partner] != undefined){
            //partner  is  present,  answer found
            return [hashMap[partner],i];
        }
        hashMap[arr[i]] = i;
    }
    return [];
};
function approach1(arr:number[],target:number) : number[]{ //TC: o(nlogn),SC:o(1)
    arr.sort((a,b)=>a-b); //o(nlogn)
    
    let l = 0;
    let r = arr.length-1;
    
    while(l<r){ //o(n)
        let currSum = arr[l] + arr[r];
        if(currSum == target){
            return [arr[l],arr[r]];
        }else if(currSum < target){
            l++;
        }else if(currSum > target){
            r--;
        }
    }

    return [-1];
}

console.log(approach1(arr,15));
