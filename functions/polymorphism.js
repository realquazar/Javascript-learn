class Bird {
    fly() {
        return "I'm flying!"
    }
}
 
class Penguin extends Bird {
    fly() {
        return "Penguins can't fly"
    }
}
 
let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

/* Output:
I'm flying!
Penguins can't fly
*/
