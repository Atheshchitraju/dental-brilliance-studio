import express from "express";
import multer from "multer";
import { detectShade } from "../controllers/shadeController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/shade-detect", upload.single("image"), detectShade);

export default router;