let n = 45;

let stars = n;
let spaces = 0;

for(let i = 1;i<=n;i++){
    let s = "";

    //first half spaces
    for(let j = 1;j<=spaces/2;j++){
        s+=" ";
    }
    //all the stars
    for(let j = 1;j<=stars;j++){
        s+="*";
    }
    //Second half of spaces - Ill not be printing the remaining spaces
    console.log(s);

    if(i <= n/2){
        //diff behaviour
        stars-=2;
        spaces+=2;
    }else{
        //diff behaviour
        stars+=2;
        spaces-=2;
    }
}