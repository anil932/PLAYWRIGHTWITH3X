class basePage {
    constructor(pagename) {
        this.pagename = pagename
    }
    open() {
        console.log("Open the browser")
    }
    close() {
        console.log("Close the browser")
    }
}
class SinlelevelInheritance  extends basePage {

}

let obj = new SinlelevelInheritance() 
console.log(obj.open())