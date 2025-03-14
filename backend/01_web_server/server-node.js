// To run use node server.js
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Server is running\n");
    } 
    else if(req.url === "/test") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("This is a TEST\n");
    } 
    else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Error 404\n");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
});
