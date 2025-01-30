// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/:date', (req, res) => {
  var input = Number(req.params.date);
  console.log(req.params.date);
  var unix, utc;
  if (isNaN(input)) {
    unix = Date.parse(req.params.date);
    utc = new Date(unix).toUTCString();
  } else {
    unix = new Date(input).getTime();
    utc = new Date(input).toUTCString();
  }
  let msg = (utc === 'Invalid Date') ? { 'error': 'Invalid Date' } : { 'unix': Number(unix), 'utc': utc };
  res.json(msg);
});

app.get('/api/', (_, res) => {
  let unix = Date.now();
  let utc = new Date(unix).toUTCString();
  res.json({ 'unix': Number(unix), 'utc': utc });
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
