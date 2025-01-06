// static does not allow you to create any objects of the class
// static only allows to call the main function with its attributes
class Calculator {
    static add(a, b) {
        return a + b;
    }
}
console.log(Calculator.add(1, 2));
