import express from "express";
import Message from "../models/message.js";

const router = express.Router();

// POST: Save message to DB
router.post("/submit", async (req, res) => {
  console.log("Received Data:", req.body);
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// GET: Fetch all messages (for testing)
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = [
      { name: "Ayaan" },
      { name: "Imran" },
      { name: "Chirag" },
    ];
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});


export default router;
