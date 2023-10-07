let s = "AaBbDCcDefg";

function toggleCase(s:string):string{
    let ans = "";
    for(let i = 0;i<s.length;i++){
        let ascii = s.charCodeAt(i); // I am getting the ascii code of s[i]
        if(ascii >= 97){ //this is a small letter
            ascii -= 32;
        }else{
            ascii += 32;
        }
        ans += String.fromCharCode(ascii); // I am generating the character associated to the new ascii value
    }
    return ans;
}

console.log(toggleCase(s));
