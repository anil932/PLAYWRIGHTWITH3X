class Car {
    #engine;
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName

    }

    getEngine() {
        return this.#engine
    }

    setEngine(engineName) {
        return this.engineName = engineName
    }

}

let c = new Car("Audi", "Turbo")
console.log(c.getEngine())