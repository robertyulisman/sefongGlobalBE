// Import express
import express from "express";
import {
  createPurchaseRequest,
  getPurchaseRequest,
} from "../controllers/Purchasing.js";

// Init express router
const router = express.Router();

router.get("/get_request", getPurchaseRequest);
router.post("/create_request", createPurchaseRequest);

// export router
export default router;
