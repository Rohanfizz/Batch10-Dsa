var x = 10;
x = "abc";
x = true;
x = 1.2;
x = [1, 2, 3, 4];
var arrS = ["a", "b", "c"];
function addNew(x, y) {
    return x + y;
}
var sum = addNew(10, 20);
// explicit 
// implicit
function func(x, y) {
    console.log("Hi");
    return 10;
}
var a = func('10', "abc");
console.log(a);
