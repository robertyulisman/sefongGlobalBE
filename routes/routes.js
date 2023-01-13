// Import express
import express from "express";
import {
  getAllAttendanceData,
  getAttendance,
} from "../controllers/Attendance.js";
import {
  createBarcode,
  createQrCode,
  createQrCodeWithLogo,
} from "../controllers/Barcode.js";

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

// create qr code
router.get("/create_qr_code", createQrCode);
router.get("/create_qr_code_with_logo", createQrCodeWithLogo);
router.get("/create_barcode", createBarcode);

// export router
export default router;
