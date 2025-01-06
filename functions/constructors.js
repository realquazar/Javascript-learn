function Person(name, age) {
    this.name = name;
    this.age = age;
}
 
function Car(make, model) {
    this.make = make;
    this.model = model;
}
 
let myCar = new Car("Toyota", "Camry");
console.log(myCar);
 
let myCar2 = Car("Honda", "Civic");
console.log(myCar2);

/* Output:
Car { make: 'Toyota', model: 'Camry' }
undefined
*/
