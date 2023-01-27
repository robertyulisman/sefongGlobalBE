// Import Dot Env
import { config } from "dotenv";
config();
// Import express
import express from "express";

// Import cors
import cors from "cors";

// Import router
import Router from "./routes/routes.js";
// Import Morgan
import morgan from "morgan";

//  Import Path
import path from "path";

// Import Body Parser
import bodyParser from "body-parser";

// Import connection
import { dbAbsensi, dbDika, dbPTSIB, db } from "./config/database.js";

import { fileURLToPath } from "url";
import { getWhatsapp } from "./controllers/Whatsapp.js";
import Passport from "./services/Passport.js";

import { getRealtimeAttendance } from "./controllers/Attendance.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Init express
const app = express();
// use express json
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// use cors
app.use(cors());
//  use morgan
app.use(morgan("tiny"));

app.use("/asset", express.static(path.join(__dirname, "asset")));

// Testing database connection
try {
  await dbAbsensi.authenticate();
  await dbDika.authenticate();
  await dbPTSIB.authenticate();
  await db.authenticate();
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

getWhatsapp();
// getRealtimeAttendance();
Passport();
