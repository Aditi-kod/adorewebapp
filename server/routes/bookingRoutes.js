import express from "express";
import Booking from "../models/Booking.js";
import authMiddleware from "../middleware/authMiddleware.js"; // JWT middleware

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
    try {
        const { products } = req.body;

        if (!products || products.length === 0) {
            return res.status(400).json({ message: "Products are required" });
        }

        const newBooking = new Booking({
            userId: req.user.id, // user info from JWT
            products: products.map(p => ({
                name: p.name || p.product || "Unknown Product",
                quantity: p.quantity || 1,
            })),
        });

        await newBooking.save();

        res.status(201).json({
            message: "Booking saved successfully!",
            booking: newBooking,
        });
    } catch (error) {
        console.error("Error saving booking:", error);
        res.status(500).json({ message: "Error saving booking", error: error.message });
    }
});

router.get("/", authMiddleware, async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id });

        res.status(200).json({
            count: bookings.length,
            bookings,
        });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Error fetching bookings", error: error.message });
    }
});

export default router;
