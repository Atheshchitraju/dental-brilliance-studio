import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";

import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController";

const router = express.Router();

router.post("/", createOrder);

router.get("/", authMiddleware, getOrders);

router.get("/:id", getOrderById);

router.put("/:id", updateOrderStatus);

export default router;