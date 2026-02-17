import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import publicRoutes from "./routes/publicRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://adorewebapp.vercel.app",
        credentials: true,
    })
);
app.use(express.urlencoded({ extended: true }));

//MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });

//Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/public", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
