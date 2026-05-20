import express from "express";

import {
  createRazorpayOrder,
  verifyPayment,
  markOrderAsPaid,
} from "../controllers/paymentController";

const router = express.Router();


// CREATE RAZORPAY ORDER
router.post("/create-order", createRazorpayOrder);


// VERIFY PAYMENT
router.post("/verify", verifyPayment);


// MANUAL MARK AS PAID
router.put("/mark-paid/:orderId", markOrderAsPaid);


export default router;