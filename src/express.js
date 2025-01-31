var express = require('express');
var cors = require('cors');
var path = require('path');

var mainView = require('./index');
var hello = require('./api/hello/index');

var app = express();

//Middleware declaration

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, _, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

//Routes declaration

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", mainView.mainView);

// your first API endpoint... 
app.get("/api/hello", hello.hello);

module.exports = { app }