import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createReport,
  deleteReport,
  getReport,
  getReports,
} from "../controllers/report.controller.js";

const reportRouter = express.Router();

reportRouter.get("/", protect, getReports);
reportRouter.post("/", protect, createReport);

// only done by admin
reportRouter.delete("/:id", protect, deleteReport);

reportRouter.get("/:id", protect, getReport);

export default reportRouter;
