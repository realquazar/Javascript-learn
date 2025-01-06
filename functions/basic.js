function makeTea(typeOfTea) {
    if(typeOfTea === "green tea") {
        return "Making some delicious green tea!";
    }
    return "making ${typeOfTea}";
}

let out = makeTea("green tea");
console.log(out);
