
export interface Shop {
    name: string,
    price: number
}

const tv: Shop = {
    name: "Tv Samsung 59",
    price: 4500
}

const laptop: Shop = {
    name: "Mac",
    price: 15200
}

// Desestructuracion de argumentos
export function addSale(shop: Shop[]): number[]{
    let total = 0;

    shop.forEach( ({price}) => {
        total += price;
    });

    return [total, total * 0.19];
}

//Desestructuracion de la funcion(arreglo)

const articles = [laptop, tv];

const [total , igv] = addSale(articles);

console.log("El precio total es: ", total );
console.log("El IGV total es: ", igv);
console.log("El monto total a pagar es: ", total + igv);
