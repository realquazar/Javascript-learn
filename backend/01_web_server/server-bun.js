// To run use "bun server.js"
import {serve} from "bun";
serve({
    fetch(request) {
        const url = new URL(request.url);
        if(url.pathname === "/") {
            return new Response("Server is running", {status: 200})
        }
        else if(url.pathname === "/coffee") {
            return new Response("Coffee is good", {status: 200})
        }
        else {
            return new Response("Eror 404", {status: 404})
        }
    },
    port: 3000,
    hostname: "127.0.0.1"
})
