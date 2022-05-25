
function sum(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
}

const res = (firstNumber: number, secondNumber: number) : number => {
    return firstNumber - secondNumber;
}

function mul (firstNumber: number, secondNumber:number, optionalNumber ?:number) {
    return firstNumber * secondNumber;
}

console.log(sum(9,2));
console.log(res(9, 2));
console.log(mul(9,2));

/*******************************************************************************/

interface Product {
    code: string;
    name: string;
    price: number;
    showPrice : () => void;
}

const sale = (producto: Product, quantity: number): number => {
    return producto.price * quantity;
}

const product: Product = {
    code: 'Mb-i7',
    name: 'Mackbook pro i7 10th',
    price: 12400.00,
    showPrice() {
        console.log('Precio unitario: '+ this.price);
    }
}

console.log('Total a pagar: ', sale(product, 3));

