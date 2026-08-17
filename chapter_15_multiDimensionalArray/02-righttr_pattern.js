
const n = 5;

for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= i; j--) {
        process.stdout.write("*" + " ")
    }
    console.log()
}

//output
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 