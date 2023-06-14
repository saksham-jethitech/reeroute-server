import express from "express";
import multer from "multer";

import {
  shipperHandler,
  truckerHandler,
  contactUsHandler,
  CarrerHandler,
} from "../controllers/email.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
// router.post("/shipper", shipperHandler);
router.post("/trucker", truckerHandler);
router.post("/shipper", shipperHandler);
router.post("/contactUs", contactUsHandler);
router.post("/carrer", upload.single("resume"), CarrerHandler);

export default router;
