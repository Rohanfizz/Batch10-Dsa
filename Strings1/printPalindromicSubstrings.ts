let s = "naman"

function isPalindome(s:string) : boolean{
    let i =0;
    let j = s.length-1;
    while(i<j){
        if(s[i]  != s[j]) return false;
        i++;
        j--;
    }
    return true;
}

function printPalindromicSubstrings(s:string) : void {
    for(let i = 0;i<s.length;i++){
        for(let j = i;j<s.length;j++){
            
            let substring = s.substring(i,j+1);
            if(isPalindome(substring)){
                console.log(substring);
            }
            
        }
    }    
}

printPalindromicSubstrings(s);