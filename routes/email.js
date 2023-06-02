import express from "express";
import { shipperHandler, truckerHandler } from "../controllers/email.js";

const router = express.Router();

// router.post("/shipper", shipperHandler);
router.post("/trucker", truckerHandler);
router.post("/shipper", shipperHandler);

export default router;
