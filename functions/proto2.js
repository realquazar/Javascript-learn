let genericCar = {
    tyres: 4
}
let tesla = {
    driver: "AI"
}
 
Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla`, Object.getPrototypeOf(tesla));
 
// Only displays properties of tesla inherited from genericCar
// Output: tesla { tyres: 4 }
