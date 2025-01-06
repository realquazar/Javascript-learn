class Employee {
    #salary;
    constructor(name, salary) {
        if(salary < 0) {
            throw("Salary can't be negative")
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary() {
        return `You're not allowed to see salary`;
    }
 
    set salary(value) {
        if(value < 0) {
            console.error("Invalid Salary");            
        }
        else {
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice", -3455555)
console.log(emp.salary);
emp.salary = -50
