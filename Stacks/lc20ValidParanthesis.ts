function areSame(opening:string,closing:string):boolean{
    if(opening=='(' && closing==')') return true;
    else if(opening=='[' && closing==']') return true;
    else if(opening=='{' && closing=='}') return true;
    return false;
}

function isValid(s: string): boolean {
    let st = [];
    for(let i = 0;i<s.length;i++){
        if(s[i] == '(' || s[i]=='[' || s[i]=='{'){
            st.push(s[i]);
        }else{
            if(st.length==0) return false;//We dont have any opening bracket for this closing bracket
            
            if(areSame(st[st.length-1],s[i])){
                st.pop();
            }else{
                return false;
            }
        }
    }
    if(st.length!=0) return false;//Some opening brackets were left
    return true;
};