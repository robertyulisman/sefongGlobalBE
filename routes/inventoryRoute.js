// Import express
import express from "express";
import { getInventory } from "../controllers/InventoryMaster.js";

// Init express router
const router = express.Router();

router.get("/", getInventory);

// export router
export default router;
