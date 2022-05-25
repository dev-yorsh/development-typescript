class Animal {
    type: string;
    inhabit: string;

    constructor(type: string, inhabit: string) {
        this.type = type;
        this.inhabit = inhabit;
    }
}

class Cat extends Animal {
    name: string;
    color: string;
    race: string;

    constructor(name: string, color: string, race: string,
                type: string, inhabit: string) {
        super(type, inhabit);
        this.name = name;
        this.color = color;
        this.race = race;
    }
}


const cat = new Cat("Silverio", "amarillo", "siames",
    "felino", "tierra");
