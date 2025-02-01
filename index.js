const app = require('./src/express');

// Listen on port set in environment variable or default to 3000
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
