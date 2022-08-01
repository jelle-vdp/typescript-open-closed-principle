"use strict";
class Animal {
    constructor(name) {
        this._name = name;
        this._type = this.constructor.name;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    makeSound() {
        return "Brrrrrr";
    }
}
class Dog extends Animal {
    makeSound() {
        return 'Bark';
    }
}
class Cat extends Animal {
    makeSound() {
        return 'Meow';
    }
}
class Parrot extends Animal {
    makeSound() {
        return "I'm a pirate!";
    }
}
class Zoo {
    constructor() {
        this._animals = new Array();
    }
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
}
const zoo = new Zoo;
zoo.addAnimal(new Cat("Garfield"));
zoo.addAnimal(new Dog("Fido"));
zoo.addAnimal(new Parrot("Polly"));
zoo.animals.forEach((animal) => {
    const target = document.querySelector('#target');
    target.innerHTML += (animal.name + ", a " + animal.type + ": " + animal.makeSound() + "<br>");
});
