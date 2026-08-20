function vowelCount(str) {
    
    let str1 = str.replace(" ", "")

     let count =0
    for(let i=0 ;i < str1.length; i++) {
        
        if(["a", "e","i","o","u","A","E","I","O","U"].includes(str1[i]))
        {
            count++
        }
    }

    return count;
}

console.log(vowelCount("Anil Yadav"))