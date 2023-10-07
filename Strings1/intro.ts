let s: any = "abcdef";
// s = s.split(""); //converted string to array
// s[0] = "f"; //changed the value of the array
// s = s.join(""); //converted array back to string

for(let i = 0;i<s.length;i++){
    for(let j = i;j<s.length;j++){
        console.log(s.substring(i,j+1));
    }
}
