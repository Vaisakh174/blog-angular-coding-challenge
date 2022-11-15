const express = require("express");
const app = new express();
const cors = require("cors");//communication
const logger = require("morgan");//to view api call on terminal


// to pass data from frontend to backend.  use => while starting the app, use is executed
app.use(express.json());//json pair
app.use(express.urlencoded({ extended: true }));//json pair
app.use(cors());
app.use(logger("dev"));//morgan

// for env file
// require ('dotenv').config();  

// mongodb
require("./middleware/mongodb.js");



const path = require('path');
app.use(express.static("./dist/frontend"));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});


// for api calls
const apii = require("./router/api.js");
app.use('/api', apii);



// set port 
const port = `api`;
// const port = process.envPORT|| 3000;
app.listen(port, () => {
    console.log(`........port is now connected at ${port} ........`);
});
