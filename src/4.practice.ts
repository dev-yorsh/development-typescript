
interface Address {
    street: string;
    city: string;
    country: string;
}

interface Person {
    name: string;
    age: number;
    address: Address;
    showAddress();
}

const person: Person = {
    name: 'Jorge',
    age: 27,
    address: {
        street: 'Los lirios F:17',
        city: 'Lima',
        country: 'Peru'
    },
    showAddress(): string {
        return (this.address.street + ' - ' + this.address.city + ' - '
            + this.address.country);
    }
}

console.log(person.showAddress());
