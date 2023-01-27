// Import express
import express from "express";
import { getUsers, getUsersByIdEmp, loginUser } from "../controllers/User.js";

// Init express router
const router = express.Router();

router.get("/", getUsers);
router.get("/:_id", getUsersByIdEmp);
router.post("/login", loginUser);

// export router
export default router;
