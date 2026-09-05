class Basetest {
    setup() {
        console.log("Open browser...")
    }
}

class ApiTest extends Basetest {
    setup() {
        console.log("Api test started ...")
    }
}


let test = new ApiTest()
let test2 = new Basetest()
test.setup()
test2.setup()

// Polymorphism has two tyoe
// 1- compile time polymorphism ()method overloading -> is not supporting
// 2- runtime polymorphism is supprting in js