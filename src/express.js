import express from 'express';
import cors from 'cors';
import path from 'path';

import { mainView } from "./index.js";
import { hello } from "./api/hello/index.js";
import { empty_date } from "./api/index.js";
import { date } from "./api/:date/index.js";
import { docs } from "./api/docs/index.js";

const app = express();
const __dirname = import.meta.dirname;

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

// /
app.use(mainView);

// /api/hello 
app.use(hello);

// /api/docs
app.use(docs);

// /api
app.use(empty_date);

// /api/:date
app.use(date);


export { app };