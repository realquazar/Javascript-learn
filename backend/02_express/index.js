import "dotenv/config"
import express from "express"
import logger from "./logger.js";
import morgan from "morgan";



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    }));

let coffeeData = [];
let nextId = 1;

// Add new coffee
app.post("/coffee", (req, res) => {
    logger.info("Added new coffee");
    const { name, price } = req.body
    const newCoffee = {
        id: nextId++,
        name,
        price
    }
    coffeeData.push(newCoffee);
    res.status(201).send(newCoffee);
})

// Get all coffee
app.get("/coffee", (req, res) => {
    res.status(200).send(coffeeData);
})

// Find coffee with id
app.get("/coffee/:id", (req, res) => {
    const coffee = coffeeData.find(coffee => coffee.id === parseInt(req.params.id));
    if(!coffee) {
        return res.status(404).send("Coffee not found");
    }
    res.status(200).send(coffee);
})

// update coffee
app.put("/coffee/:id", (req, res) => {    
    const coffee = coffeeData.find(coffee => coffee.id === parseInt(req.params.id));
    if(!coffee) {
        return res.status(404).send("Coffee not found");
    }
    const {name, price} = req.body;
    coffee.name = name;
    coffee.price = price;
    res.status(200).send(coffee);
})

// delete tea
app.delete("/coffee/:id", (req, res) => {
    const index = coffeeData.findIndex(coffee => coffee.id === parseInt(req.params.id));
    if(index === -1) {
        return res.send(404).send("Error 404");
    }
    coffeeData.splice(index, 1);
    return res.send(204).send(`Deleted`);
})


app.listen(port, () => {
    console.log(`Server running at part: ${port}...`);
    
});
