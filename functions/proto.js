// In this code we learn to shar properties with 2 objects using __proto__

let computer = {
    cpu: 12,  
}

let lenovo = {
    screen: "HD",
    __proto__: computer,
}

console.log("lenovo: ", lenovo.__proto__);

// Output: lenovo { cpu: 12 }
