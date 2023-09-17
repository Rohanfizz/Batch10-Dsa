let x : number | string | boolean | number[]= 10;

x = "abc";
x = true;
x= 1.2;
x = [1,2,3,4];

let arrS : string[] = ["a","b","c"];

function addNew(x : number,y : number) : number{
    return x+y;
}

let sum = addNew(10,20);

// explicit 
// implicit
function func( x:number ,y : string) : number{
	console.log("Hi")
    return 10;
}

let a = func( 10,"abc");

console.log(a);