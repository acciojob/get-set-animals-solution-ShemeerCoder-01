// class Animal {
//   constructor(species) {
//     this._species = species;
//   }

//   get species() {
//     return this._species;
//   }

//   makeSound() {
//     console.log("The " + this.species + " makes a sound");
//   }
// }

// class Cat extends Animal {
//   purr() {
//     console.log("purr");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("woof");
//   }
// }
// let animal = new Animal("Horse");
// animal.makeSound();
// let cat = new Cat("Cat");
// cat.purr();
// let dog = new Dog("Dog");
// dog.bark();


// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;

class Animal {
constructor(species) {
this._species = species;
}

get species() {
return this._species;
}

makeSound() {
console.log(`The ${this.species} makes a sound.`);
}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
purr() {
console.log("purr");
}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
bark() {
console.log("woof");
}
}

let animal = new Animal("Horse");
animal.makeSound();
let cat = new Cat("Cat");
cat.purr();
let dog = new Dog("Dog");
dog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
