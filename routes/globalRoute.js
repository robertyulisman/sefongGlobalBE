// Import express
import express from "express";
import {
  getCurrency,
  getDepartement,
  getJabatan,
  getUom,
} from "../controllers/Global.js";
import passport from "passport";

const middleware = passport.authenticate("jwt", { session: false });

// Init express router
const router = express.Router();

router.get("/jabatan", middleware, getJabatan);
router.get("/departement", middleware, getDepartement);
router.get("/uom", middleware, getUom);
router.get("/currency", middleware, getCurrency);

// export router
export default router;
