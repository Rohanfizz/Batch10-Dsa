let s = "aaabbbccdddgeefffg"

function stringCompress(s: string) : string{
    let i =0;
    let ans = "";

    while(i<s.length){
        let j = i;
        while(j<s.length && s[i] == s[j]) j++;
        ans+=s[i];
        if(j - i > 1) ans += (j-i);// Adding the freq
        i = j;
    }
    return ans;
}

console.log(stringCompress(s));
