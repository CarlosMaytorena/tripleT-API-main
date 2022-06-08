var express = require('express');
var app = express();
var morgan = require('morgan');

var cors = require('express');


//var path = require('path');
// Configurations
app.set("port", 3000);
app.set('json spaces',2)

// Middleware
app.use(morgan("dev"));
app.use(express.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// Rutas
app.use('/api',require('./routes/routes'))

// APP
app.listen(app.get("port"));

