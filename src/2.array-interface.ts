//Array
let personas: (string | number) [] = ['Juan', 'Marcos', 3];
personas.push('Marcos Ernest');
let filtrate = personas.filter((x) => x == 'Marcos');
console.log(filtrate);

// Interface
interface Coche {
    marca: string;
    anio: number;
    color?: string;
}

const coche: Coche = {
    marca: 'Toyota',
    anio: 2020,
}
coche.color = 'rojo';

console.table(coche);

