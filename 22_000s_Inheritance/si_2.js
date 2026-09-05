class Animal {
    constructor(name) {
      this.name = name
    }
eat() {
    console.log(`${this.name} is eating `)
}
barking() {
    console.log(`${this.name} is eating`)
}
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  barking() {
    console.log("dog is barking")
  }
}

let obj = new Animal("Teepu", "Labrador")
obj.barking()