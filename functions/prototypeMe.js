Array.prototype.me = function() {
    return `Custom method ${this}`
}
let myArr = [1, 2, 3];
console.log(myArr.me());

// Output: Custom method 1,2,3
