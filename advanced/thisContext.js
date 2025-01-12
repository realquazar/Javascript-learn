const person = {
    name: "Mee",
    greet() {
        console.log(`hi, ${this.name}`);        
    }
}

person.greet()

const greetFunction = person.greet
greetFunction();

const boundGreet = person.greet.bind({name: "John"})
boundGreet();
