import express from "express";
import {
  shipperHandler,
  truckerHandler,
  contactUsHandler,
  CarrerHandler,
} from "../controllers/email.js";

const router = express.Router();

// router.post("/shipper", shipperHandler);
router.post("/trucker", truckerHandler);
router.post("/shipper", shipperHandler);
router.post("/contactUs", contactUsHandler);
router.post("/carrer", CarrerHandler);

export default router;
