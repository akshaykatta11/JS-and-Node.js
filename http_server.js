// Creating Simple Server

// Fetching all the HTTP related methods from 'http' file
const http = require('http');

// List of Movies Tickets
const movieList = [
    {
        "name": "World War Z",
        "price": 250
    },
    {
        "name": "Resident Evil",
        "price": 330
    },
    {
        "name": "Train to Busan",
        "price": 390
    },
    {
        "name": "The Spectral",
        "price": 300
    }
];

// Using this in 'index.js' of Server_App project
module.exports = movieList;

// Creating Server
const server = http.createServer((request, response)=> {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(JSON.stringify(movieList));
});

// Server Listing on Port with a console message(To close the server, we need instance of "server.listen" method)
let http_server = server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");
});

// Closing the server
function close(){
    http_server.close((err) => {
        console.log('server closed! '+err)
        process.exit(err ? 1 : 0)
    });
}


