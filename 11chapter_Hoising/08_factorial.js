

const factorial = function fact(n) {
    if(n <=1) {
        return 1
    } else {
        return n * fact(n-1);
    }
}

// console.log(factorial(3))



// Function is fully hoisted
console.log(add(3,4))

function add (a, b) {
 return a+b;

}