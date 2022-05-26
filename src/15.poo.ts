export class Planeta implements IPlaneta{
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    mostrarMensaje(): void {
        console.log('Ejecutando metodo de la clase planeta');
    }
}

class Tierra extends Planeta{

    constructor(name: string) {
        super(name);
    }

    override mostrarMensaje(): void {
        super.mostrarMensaje();
        console.log("Ejecutando metodo de Tierra");
    }
}


interface IPlaneta {
    name: string;
    location ?: string;
    detail: string;
}
