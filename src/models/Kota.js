import mongoose from "mongoose";

const dialogSchema = new mongoose.Schema({
  text: { type: String, required: true },
  deleteAfter: { type: Boolean, default: false },
});

const bossSchema = new mongoose.Schema({
  name: { type: String, required: true },
  health: { type: Number, default: 100 },
  dialogs: {
    idle: [dialogSchema],
    wrong: [dialogSchema],
    correct: [dialogSchema],
  },
  images: [{ type: String }], // simpan path atau URL gambar
});

const challengePromptSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: mongoose.Schema.Types.Mixed, required: true }, // bisa number/string/object
  duration: { type: Number, default: 0 }, // opsional
});

const challengeSchema = new mongoose.Schema({
  prompts: [challengePromptSchema],
});

const kotaDetailsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    boss: bossSchema,
    challenge: challengeSchema,
  },
  { timestamps: true }
);

const KotaDetails = mongoose.model("KotaDetails", kotaDetailsSchema);

export default KotaDetails;
