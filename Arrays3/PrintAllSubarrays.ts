let arr = [10,20,30,40]

for(let sp = 0;sp<arr.length;sp++){
    for(let ep= sp;ep<arr.length;ep++){
        let s = "";
        for(let i = sp;i<=ep;i++) s+= arr[i] +", ";
        console.log(s)
    }
}