import {addSale, Shop} from "./7.destructuring-args";

const smartPhone: Shop[] = [
    {
        name: "Sansung Galaxy s22",
        price: 4500
    },
    {
        name: "Iphone 12pro 128GB",
        price: 5500
    }
];

const [total, igv] = addSale(smartPhone);

console.log("El precio total es: ", total );
console.log("El IGV total es: ", igv);
console.log("El monto total a pagar es: ", total + igv);

