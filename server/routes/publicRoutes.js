import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.get("/services", (req, res) => {
    res.json([
        { name: "Healthcare", icon: "💊" },
        { name: "Education", icon: "📚" },
        { name: "Farming Help", icon: "🌾" },
        { name: "Water Supply", icon: "🚰" },
        { name: "Transport", icon: "🚌" },
    ]);
});

router.get("/products", (req, res) => {
    res.json([
        { name: "Rice", price: "₹40/kg", icon: "🍚" },
        { name: "Wheat", price: "₹35/kg", icon: "🌾" },
        { name: "Milk", price: "₹50/litre", icon: "🥛" },
        { name: "Vegetables", price: "₹30/kg", icon: "🥕" },
        { name: "Butter", price: "₹80/pack", icon: "🧈" },
        { name: "Bread", price: "₹25", icon: "🍞" },
    ]);
});

router.get("/news", (req, res) => {
    res.json([
        "New irrigation project launched in rural areas",
        "Free health camp scheduled this Sunday",
        "Local farmers get subsidy on fertilizers",
    ]);
});

router.post("/contact", async (req, res) => {
    try {
        const { name, message } = req.body;
        const contact = new Contact({ name, message });
        await contact.save();
        res.json({ message: "Contact saved successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
