
function largestNumber(arr) {

    let max= arr[0]
    for(let i=1;i<arr.length; i++) {
        if(max < arr[i]) {
            max =arr[i]
        }
    }
    return max
    
}

console.log(largestNumber([10,40,50,100,1,2]))