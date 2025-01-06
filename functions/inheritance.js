class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}
 
class Car extends Vehicle {
    drive() {
        return `${this.make} : Inheritance example`
    }
}
 
 
let myCar = new Car("Honda", "Civic");
console.log(myCar.start());
console.log(myCar.drive());
 
// myCar inherits properties like make and model from Vehicle using the 'extends' keyword

/* Output:
Civic is a car from Honda
Honda : Inheritance example
*/
