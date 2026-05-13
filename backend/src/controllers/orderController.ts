import { Request, Response } from "express";
import Order from "../models/Order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      name,
      phone,
      clinic,
      clinicEmail,
      clinicWhatsapp,
      product,
      shade,
      selectedTeeth,
      notes,
    } = req.body;

    const orderId = `ORD-${Date.now()}`;

    const order = await Order.create({
      name,
      phone,
      clinic,
      clinicEmail,
      clinicWhatsapp,
      product,
      shade,
      selectedTeeth,
      notes,
      orderId,
    });

    res.status(201).json({
      success: true,
      message: "Order saved successfully",
      order,
    });
  } catch (error: any) {
    console.log("ORDER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL ORDERS

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error: any) {
    console.log("GET ORDERS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/// GET SINGLE ORDER
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({ orderId: id });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error: any) {
    console.log("GET ORDER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE ORDER STATUS

export const updateOrderStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const updateData = {
      ...req.body,
    };

    // AUTO SAVE DELIVERY TIME

    if (req.body.status === "Delivered") {
      updateData.deliveredAt = new Date();
    }

    const updatedOrder = await Order.findOneAndUpdate(
      {
        orderId: id,
      },

      updateData,

      {
        returnDocument: "after",
      }
    );

    res.status(200).json({
      success: true,
      order: updatedOrder,
    });
  } catch (error: any) {
    console.log("UPDATE ORDER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
