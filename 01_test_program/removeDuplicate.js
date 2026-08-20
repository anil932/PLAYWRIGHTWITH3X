function removeDuplicateValue(arr) {
let newArr = []
for(let i=0; i<arr.length; i++) {
    if( !newArr.includes(arr[i])) {
     newArr.push(arr[i])
    } 
    
}
return newArr
}


console.log(removeDuplicateValue([10,5,6,7,5,10]))