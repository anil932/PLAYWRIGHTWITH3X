var x = 1; 
function foo() 
{ 
    console.log(x);
    var x = 2; 
    console.log(`x is ${x}`)

} 
console.log(`x are in outside  ${x}`)
foo();