import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
  type: { type: String, default: "multiple_choice" },
});

const levelSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  entityName: { type: String, required: true },
  question: { type: questionSchema, required: true },
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  background: String,
  levels: [levelSchema],
});

const City = mongoose.model("City", citySchema);

export default City;
