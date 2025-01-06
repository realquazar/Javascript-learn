function Drink(name) {
    if(!new.target) {
        throw new Error("Drink must be called with new keyword")        
    }
    this.name = name;
}
let tea = new Drink("Tea");
let coffee = Drink("Coffee");

// Displays a custom error if the class Drink is initialized without using the keyword "new"
