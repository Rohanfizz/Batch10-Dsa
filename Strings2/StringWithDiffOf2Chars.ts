let s = "abcdbeaA"

function stringWithDiff(s:string):string{
    let ans = "";
    let n = s.length;
    for(let i = 0;i<n;i++){
        ans += s[i];
        if(i+1 < n){
            ans += s.charCodeAt(i+1) - s.charCodeAt(i);
        }
    }
    return ans;
}
console.log(stringWithDiff(s));
