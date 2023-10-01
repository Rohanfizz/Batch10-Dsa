let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

function iteration1(arr: number[][]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

function iteration2(arr: number[][]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}
function iteration3(arr: number[][]) {
    for (let i = arr.length-1 ; i >= 0 ; i-- ) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}
function zigZag(arr: number[][]) {
    for(let i= 0;i<arr.length;i++){
        if(i%2 == 0){   //Even row
            for(let j = 0;j<arr[i].length;j++) console.log(arr[i][j]);
        }else{          //Odd row
            for(let j = arr[i].length-1;j>=0;j--) console.log(arr[i][j]);
        }
    }
}

function iteration4(arr:number[][]){
    for(let j  = 0;j<arr[0].length;j++){
        for(let i = arr.length-1;i>=0;i--){
            console.log(arr[i][j]);
        }
    }
}
iteration4(arr);
