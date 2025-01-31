var express = require('./src/express');
var app = express.app;

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 5001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
