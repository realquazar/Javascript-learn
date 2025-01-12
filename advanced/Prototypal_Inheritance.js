function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Name: ${this.name}`);    
}

let alex = new Person("Alex");
alex.greet();
