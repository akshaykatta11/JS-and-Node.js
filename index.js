// Creating Server with Express

// Fetching all the veriables and methods from 'express' file
const express = require('express');

// Creating Server
const server = express();

// Server Listing on Port with a console message(To close the server, we need instance of "server.listen" method)
let app_server = server.listen(4000, ()=>{
    console.log("Server running at http://localhost:4000");
});

// Executes on every request
server.use(express.json()); // express.json -> parses imcoming request

// Sending Responses
server.get("/", (req, res) => {
   res.send("<h1>Hello World</h1>"); 
});

server.get("/about", (req, res) => {
    res.send(`<h1>Hello, I am Akshay Katta, born and raised in Pune. <br/>I've completed my graduation in Computer Engineering at MESCOE. <br/>I'm currently working as a Programmer in Bitwise Solutions Pvt. Ltd., Since 2021.</h1>`);
});

// Importing movieList from http_server.js file
const movieList = require('./http_server');

server.get("/movies", (req, res) => {
    console.log("Movies: "+ JSON.stringify(movieList, null, 4));
    // Sending movieList object/Array as a response.
    res.json(movieList);
});

server.post("/setMovie", (req, res) => {
    console.log("Movie received: "+ req.body);
    for(let i=0; i<req.body.length; i++){
        console.log("Movie Object: "+ JSON.stringify(req.body[i], null, 4));
        movieList.push(req.body[i]);
    }
    res.send("Data Pushed Successfully...!");
});

server.put("/updatePrice", (req, res) => {
    const movieFare = req.body;
    res.send(movieList.find((movie) => {
        if(movie.name === movieFare.name){
            console.log(`Movie Name: ${movie.name} :: Old_Price: ${movie.price} -> New_Price: ${movieFare.price}`);
            movie.price = movieFare.price;
        }
    }));
});

// Closing Server
server.get("/close", (req, res) => {
    res.send("Server closed!");
    app_server.close(() => {
        console.log('Server closed!');
        process.exit(0);
    });
});


