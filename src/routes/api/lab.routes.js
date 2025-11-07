import express from "express";
import {
  createLabTest,
  getAllLabTests,
  updateLabResult
} from "./../../controllers/lab.controller.js";

const router = express.Router();

router.post("/", createLabTest);
router.get("/", getAllLabTests);
router.put("/:id", updateLabResult);

export default router;
