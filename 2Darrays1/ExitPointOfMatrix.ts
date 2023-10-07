let arr = [
    [0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0],
];

function exitPoint(arr: number[][]): void {
    let i = 0;
    let j = 0;
    let dir = "R";

    let n= arr.length;
    let m = arr[0].length;

    while( i>=0 && i<n && j>=0 && j<m){//until i am inside the matrix
        if(arr[i][j] == 1){
            //Change direction
            if(dir == "R") dir = "D";
            else if(dir == "D") dir = "L";
            else if(dir == "L") dir = "U";
            else if(dir == "U") dir = "R";

            arr[i][j] = 0;
        }
        //Move forward
        if(dir == "R") j++;
        else if(dir == "D") i++;
        else if(dir == "L") j--;
        else if(dir == "U") i--;
    }

    //On this line of code
    //we will be standing out of the matrix
    //we have to take one step backward so that we are back inside the matrix
    //Move backward
    if(dir == "R") j--;
    else if(dir == "D") i--;
    else if(dir == "L") j++;
    else if(dir == "U") i++;

    console.log(i,j);
}

exitPoint(arr)













