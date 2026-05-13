import express from "express";

import {
  createCase,
  getCases,
  updateCaseStatus,
} from "../controllers/caseController";

const router = express.Router();

router.post("/", createCase);

router.get("/", getCases);

router.put("/:id", updateCaseStatus);

export default router;