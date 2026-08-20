
function palindrome(str) {
    let rev=""
    for(let i= str.length-1; i>=0;i--) {
        rev = rev + str.charAt(i)
    }

    if(str == rev) {
        console.log("String is palindrome")
    }
    else{
        console.log("String is not palindrome")
    }

}

palindrome("madam")