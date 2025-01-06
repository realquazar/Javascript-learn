class CoffeeMachine {
    start() {
        return 'Coffee machine is starting...';
    }
 
    brewCoffee() {
        return "Brewing coffee"
    }
    pressStartButton() {
        let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return `${msg1}\n${msg2}`
    }
}
 
let myMachine = new CoffeeMachine()
console.log(myMachine.pressStartButton());

/* Output:
Coffee machine is starting...
Brewing coffee
*/
