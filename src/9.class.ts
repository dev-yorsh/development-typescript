class Persons {
    name: string;
    lastName: string;
    year: number;

    printData(): string {
        return this.name + this.lastName;
    }
}

const persons = new Persons();
console.log(persons);
