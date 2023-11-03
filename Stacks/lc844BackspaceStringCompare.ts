function backspaceCompare(s: string, t: string): boolean {
    let st1 = [];
    for(let i = 0;i<s.length;i++){
        if(s[i] == '#'){
            if(st1.length > 0) st1.pop();
        }else{
            st1.push(s[i]);
        }
    }
    let processedS = st1.join('');

    let st2 = [];
    for(let i = 0;i<t.length;i++){
        if(t[i] == '#'){
            if(st2.length > 0) st2.pop();
        }else{
            st2.push(t[i]);
        }
    }

    let processedT = st2.join('');
    console.log(processedS,processedT);
    return processedS == processedT;
};