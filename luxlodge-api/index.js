//Load Modules
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser =  require("body-parser");
const router = require("./app/routes/router");

/*Database config*/
const database = require('./app/config/dbconfig');

/*Init database*/
// database.init();

/*Init server listening*/
const port = process.argv[2] || 8000;
app.listen(port, function(){
    console.log("Server listening on port: " + port);
});

/*Express config*/
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*Router config*/
app.use('/api', router);
