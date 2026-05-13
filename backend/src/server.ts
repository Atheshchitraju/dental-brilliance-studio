import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

import caseRoutes from "./routes/caseRoutes";
import orderRoutes from "./routes/orderRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Dental Backend Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/cases", caseRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});