
let order = new Promise(function(resolve,reject) {

     let foodIsReady = true 
     if(foodIsReady) {
        resolve("Pizza is delivered")
     } else {
        reject("Canceled the pizza order")
     }
})

console.log(order)