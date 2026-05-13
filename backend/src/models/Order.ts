import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    clinic: {
      type: String,
      required: true,
    },

    clinicEmail: {
      type: String,
    },

    clinicWhatsapp: {
      type: String,
    },

    product: {
      type: String,
      required: true,
    },

    shade: {
      type: String,
    },

    selectedTeeth: {
      type: [Number],
      default: [],
    },

    notes: {
      type: String,
    },

    orderId: {
      type: String,
      unique: true,
    },

    designer: {
      type: String,
      default: "",
    },

    status: {
      type: String,

      enum: ["Placed", "Accepted", "Designing", "Printing", "Completed", "Delivered", "Rejected"],

      default: "Placed",
    },

    deliveryDate: {
      type: String,
    },

    deliveredAt: {
      type: Date,
    },

    remarks: {
      type: String,
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.model("Order", orderSchema);
