import { Request, Response } from "express";
import crypto from "crypto";
import razorpay from "../utils/razorpay";
import Order from "../models/Order";

// ==============================
// CREATE RAZORPAY ORDER
// ==============================

export const createRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { amount, orderId } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    const options = {
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };
    console.log(process.env.RAZORPAY_KEY_ID);
    console.log(process.env.RAZORPAY_KEY_SECRET);

    const razorpayOrder = await razorpay.orders.create(options);

    // Save Razorpay Order ID in DB
    await Order.findOneAndUpdate(
      { orderId },
      {
        "paymentDetails.razorpayOrderId": razorpayOrder.id,
      },
    );

    res.status(200).json({
      success: true,
      razorpayOrder,
    });
  } catch (error: any) {
    console.error("Create Razorpay Order Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message,
    });
  }
};

// ==============================
// VERIFY PAYMENT
// ==============================

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { orderId, razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentMethod } =
      req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isAuthentic = generated_signature === razorpay_signature;

    if (!isAuthentic) {
      await Order.findOneAndUpdate(
        { orderId },
        {
          paymentStatus: "failed",
        },
      );

      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // Update order payment details
    const updatedOrder = await Order.findOneAndUpdate(
      { orderId },
      {
        paymentStatus: "paid",

        paymentDetails: {
          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          paymentMethod,
          paidAt: new Date(),
        },
      },
      { new: true },
    );

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      order: updatedOrder,
    });
  } catch (error: any) {
    console.error("Verify Payment Error:", error);

    res.status(500).json({
      success: false,
      message: "Payment verification failed",
      error: error.message,
    });
  }
};

// ==============================
// MANUAL MARK AS PAID
// FOR COD / POSTPAID
// ==============================

export const markOrderAsPaid = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId },
      {
        paymentStatus: "paid",

        "paymentDetails.paymentMethod": "Cash",

        "paymentDetails.paidAt": new Date(),
      },
      { new: true },
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order marked as paid",
      order: updatedOrder,
    });
  } catch (error: any) {
    console.error("Mark Paid Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to mark order as paid",
      error: error.message,
    });
  }
};
