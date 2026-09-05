class person {
    #child1;
    #child2;
    constructor(name, child1, child2) {
     this.name = name;
     this.#child1 = child1;
     this.#child2 = child2
    }

    getChild1() {
        return this.#child1
    }
    setChild1(name) {
       return this.#child1= name
    }

    getChild2() {
        return this.#child2
    }
    setChild2(name) {
     return this.#child2
    }
}

let p = new person("Anil", "Anik", "Akul")
console.log(p.getChild1())
console.log(p.getChild2())
console.log(p.setChild1("Aakash"))
console.log(p.getChild1())