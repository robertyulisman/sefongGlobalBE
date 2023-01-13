// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
// import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";
// Import Morgan
import morgan from "morgan";
import { dbAbsensi, dbDika, dbHosting } from "./config/database.js";

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
//  use morgan
app.use(morgan("tiny"));

// Testing database connection
try {
  await dbAbsensi.authenticate();
  await dbDika.authenticate();
  await dbHosting.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// use router
app.use(Router);

// listen on port
const port = 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);

// 081371031671