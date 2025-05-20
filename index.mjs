import { app } from "./src/express.mjs";
import { logger } from "./src/logger.mjs";

// Listen on port set in environment variable or default to 3000
var listener = app.listen(3001, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});
