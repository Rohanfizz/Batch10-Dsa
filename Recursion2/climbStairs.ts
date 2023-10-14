//This problem can also be treated print denominations
function climbStairs(i:number,psf:string,n:number) : void {
    //base cases
    if(i == n){
        console.log(psf);
        return;
    }
    if(i > n){
        return;
    }

    //options
    climbStairs(i+1,psf+"1 ",n);
    climbStairs(i+2,psf+"2 ",n);
    climbStairs(i+3,psf+"3 ",n);
}

function countWaysToClimbStairs(i:number,n:number) : number{
    if(i == n) return 1;
    if(i > n) return 0;

    let oneJump = countWaysToClimbStairs(i+1,n);
    let twoJump = countWaysToClimbStairs(i+2,n);
    let threeJump = countWaysToClimbStairs(i+3,n);

    return oneJump + twoJump + threeJump;
}

// climbStairs(0,"",4);
console.log(countWaysToClimbStairs(0,4));
