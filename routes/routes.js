// Import express
import express from "express";
import {
  getAllAttendanceData,
  getRealtimeAttendance,
} from "../controllers/Attendance.js";
import {
  createBarcode,
  createQrCode,
  createQrCodeWithLogo,
} from "../controllers/Barcode.js";

import PurchasingRoute from "./purchasingRoute.js";
import GlobalRoute from "./globalRoute.js";
import UserRoute from "./userRoute.js";
import InventoryRoute from "./inventoryRoute.js";

// Init express router
const router = express.Router();

router.get("/attendance_real_time", getRealtimeAttendance);
router.get("/get_attendance_all_data", getAllAttendanceData);

// whatsapp
// router.get("/whatsapp", getWhatsapp);

// create qr code
router.get("/create_qr_code", createQrCode);
router.get("/create_qr_code_with_logo", createQrCodeWithLogo);
router.get("/create_barcode", createBarcode);

router.use("/api", GlobalRoute);
router.use("/api/users", UserRoute);
router.use("/api/purchasing", PurchasingRoute);
router.use("/api/inventory", InventoryRoute);

// export router
export default router;
