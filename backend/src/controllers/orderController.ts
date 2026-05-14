import { Request, Response } from "express";
import Order from "../models/Order";
import { sendWhatsAppMessage } from "../services/whatsappService";

// CREATE ORDER

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

    // SEND ORDER RECEIVED MESSAGE

    try {
      if (clinicWhatsapp) {
        console.log("Sending initial order WhatsApp...");

        await sendWhatsAppMessage(
          clinicWhatsapp,

          `🦷 3D Digital Dental Designers

Your order has been received successfully.

📌 Order ID:
${orderId}

👤 Patient:
${name}

🏥 Clinic:
${clinic}

🦷 Product:
${product}

🎨 Shade:
${shade || "Not Selected"}

We will notify you once production begins.`,
        );
      }
    } catch (whatsappError) {
      console.log("Initial WhatsApp failed:");

      console.log(whatsappError);
    }

    res.status(201).json({
      success: true,
      message: "Order saved successfully",
      order,
    });
  } catch (error: any) {
    console.log("ORDER ERROR:");

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL ORDERS

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error: any) {
    console.log("GET ORDERS ERROR:");

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE ORDER

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({
      orderId: id,
    });

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
    console.log("GET ORDER ERROR:");

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE ORDER STATUS

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updateData: any = {
      ...req.body,
    };

    // AUTO SAVE DELIVERY DATE

    if (req.body.status === "Delivered") {
      updateData.deliveredAt = new Date();
    }

    const updatedOrder = await Order.findOneAndUpdate(
      {
        orderId: id,
      },

      updateData,

      {
        new: true,
      },
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // WHATSAPP STATUS AUTOMATION

    try {
      let message = "";

      // ACCEPTED

      if (req.body.status === "Accepted") {
        message = `🦷 3D Digital Dental Designers

✅ Your Order Has Been Accepted

━━━━━━━━━━━━━━━

📌 Order ID:
${updatedOrder.orderId}

👤 Patient Name:
${updatedOrder.name}

🏥 Clinic:
${updatedOrder.clinic}

🦷 Product:
${updatedOrder.product}

🎨 Shade:
${updatedOrder.shade || "Not Selected"}

🦷 Teeth Numbers:
${updatedOrder.selectedTeeth?.length ? updatedOrder.selectedTeeth.join(", ") : "Not Provided"}

📝 Notes:
${updatedOrder.notes || "No Notes"}

━━━━━━━━━━━━━━━

Our production team will begin processing your case shortly.

Thank you for choosing
3D Digital Dental Designers 🙏`;
      }

      // PRINTING
      else if (req.body.status === "Printing") {
        message = `🖨️ 3D Digital Dental Designers

Your order is currently under printing process.

📌 Order ID:
${updatedOrder.orderId}

🦷 Product:
${updatedOrder.product}

We will notify you once printing is completed.`;
      }

      // COMPLETED
      else if (req.body.status === "Completed") {
        message = `✅ 3D Digital Dental Designers

Your dental case has been completed successfully.

📌 Order ID:
${updatedOrder.orderId}

Your order will be dispatched soon.`;
      }

      // DELIVERED
      else if (req.body.status === "Delivered") {
        message = `🚚 3D Digital Dental Designers

Your order has been delivered successfully.

📌 Order ID:
${updatedOrder.orderId}

Thank you for choosing 3D Digital Dental Designers Lab.`;
      }

      // SEND WHATSAPP MESSAGE

      if (message && updatedOrder.clinicWhatsapp) {
        console.log("Status Changed:", req.body.status);

        console.log("WhatsApp Number:", updatedOrder.clinicWhatsapp);

        console.log("Sending Message:");

        console.log(message);

        await sendWhatsAppMessage(updatedOrder.clinicWhatsapp, message);
      }
    } catch (whatsappError) {
      console.log("WhatsApp status update failed:");

      console.log(whatsappError);
    }

    res.status(200).json({
      success: true,
      order: updatedOrder,
    });
  } catch (error: any) {
    console.log("UPDATE ORDER ERROR:");

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
