// Import express
import express from "express";
import {
  getAllAttendanceData,
  getAttendance,
} from "../controllers/Attendance.js";

import { getUsers } from "../controllers/User.js";
import { getWhatsapp } from "../controllers/Whatsapp.js";

// Init express router
const router = express.Router();

// Route get semua product
router.get("/get_attendance", getAllAttendanceData);
router.get("/attendance", getAttendance);

// user
router.get("/users", getUsers);

// whatsapp
router.get("/whatsapp", getWhatsapp);

// export router
export default router;
