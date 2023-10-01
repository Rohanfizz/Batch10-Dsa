let n = 105;

let nextNumber = 0;
while(n > 0){
    let digit = n%10;
    nextNumber += digit*digit;
    // console.log(digit);
    n= Math.floor(n/10)
}
console.log(nextNumber);
