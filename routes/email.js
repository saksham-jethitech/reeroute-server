import express from "express";
import { truckerHandler } from "../controllers/email.js";

const router = express.Router();

// router.post("/shipper", shipperHandler);
router.post("/trucker", truckerHandler);

export default router;
