import express from "express";
import Challenge from "../models/Challenge.js";
import { connectDB } from "../db/connection.js";

const router = express.Router();

router.use(async (req, res, next) => {
  await connectDB();
  next();
});

router.post("/", async (req, res) => {
  try {
    const { name, lang, author, difficulty, questions } = req.body;

    const newChallenge = await Challenge.create({
      name,
      lang,
      author,
      difficulty,
      questions,
    });

    res.status(201).json(newChallenge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const challenges = await Challenge.find().sort({ createdAt: -1 });
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge)
      return res.status(404).json({ message: "Challenge not found" });
    res.json(challenge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!challenge)
      return res.status(404).json({ message: "Challenge not found" });
    res.json(challenge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Challenge.findByIdAndDelete(req.params.id);
    if (!result)
      return res.status(404).json({ message: "Challenge not found" });
    res.json({ message: "Challenge deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
