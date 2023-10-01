var n = 105;
var nextNumber = 0;
while (n > 0) {
    var digit = n % 10;
    nextNumber += digit * digit;
    // console.log(digit);
    n = Math.floor(n / 10);
}
console.log(nextNumber);
