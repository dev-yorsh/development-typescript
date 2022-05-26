interface Pasajero {
    name: string
    hijos?: string[];
}

const pasajero1: Pasajero = {
    name: "Juan Test",
    hijos: ["marcos", "pepe"]
}

const pasajero2: Pasajero = {
    name: "Juan Test"
}

function contarHijos(pasajero: Pasajero): number {
    // Si no le dijeramos que es opcional, nos traeria error en caso no exista.
    return pasajero.hijos?.length || 0;
}

console.log("Cantidad de hijos: ", contarHijos(pasajero2));
