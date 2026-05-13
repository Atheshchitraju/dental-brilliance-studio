import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
    },

    clinicName: {
      type: String,
      required: [true, "Clinic name is required"],
      trim: true,
    },

    doctorName: {
      type: String,
      required: [true, "Doctor name is required"],
      trim: true,
    },

    serviceType: {
      type: String,
      required: [true, "Service type is required"],
      enum: [
        "Smile Design",
        "Crown Design",
        "Aligners",
        "Implants",
        "Veneers",
      ],
    },

    status: {
      type: String,
      enum: ["Pending", "Designing", "Completed"],
      default: "Pending",
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Case", caseSchema);