function imprimirConsola(constructorClase: Function) {
    console.log('Imprimiendo Clase: ', constructorClase);
}

@imprimirConsola
class Dog {
    name: string;
    race: string;

    constructor(name: string, race: string) {
        this.name = name;
        this.race = race;
    }

    imprimir() {
        console.log(`${this.name} - ${this.race}`);
    }
}
