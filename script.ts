interface AnimalSound {
    makeSound(): string;
}

class Animal implements AnimalSound {
    protected _name: string;
    protected _type: string;

    constructor (name: string) {
        this._name = name;
        this._type = this.constructor.name;
    }

    set name(value : string) {
        this._name = value;
    }

    get name(): string {
        return this._name;
    }    
    
    get type(): string {
        return this._type;
    }

    public makeSound(): string {
        return "Brrrrrr";
    }
}

class Dog extends Animal {

    public makeSound(): string {
        return 'Bark';
    }
}

class Cat extends Animal {

    public makeSound(): string {
        return 'Meow';
    }
}

class Parrot extends Animal {

    public makeSound(): string {
        return "I'm a pirate!";
    }
}

class Zoo {
    private _animals : Array<Animal> = new Array<Animal>();

    public addAnimal(animal: Animal) {
        this._animals.push(animal);
    }

    get animals(): Array<Animal> {
        return this._animals;
    }
}

const zoo = new Zoo;
zoo.addAnimal(new Cat("Garfield"));
zoo.addAnimal(new Dog("Fido"));
zoo.addAnimal(new Parrot("Polly"));

zoo.animals.forEach((animal) => {
    const target = <HTMLElement>document.querySelector('#target');
    target.innerHTML += (animal.name + ", a " + animal.type + ": " + animal.makeSound() + "<br>");
});