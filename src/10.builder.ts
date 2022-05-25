class Car {
    model: string;
    year: number;
    plate: string;

    constructor(model: string, year: number, plate:string) {
        this.model = model;
        this.year = year;
        this.plate = plate;
    }
    // Constructor en linea
    /* constructor(public model: string, public year: number,
             public plate:string) {
    }*/
}

const car = new Car("Toyoya Yaris", 2020, "PE-4512");

console.log(car);
