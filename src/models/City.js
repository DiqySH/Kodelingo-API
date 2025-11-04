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
  type: { type: String, enum: ["normal", "boss"], default: "normal" },
  
  question: {
    type: questionSchema,
    required: function () {
      return this.type === "normal";
    },
  },

  questions: {
    type: [questionSchema],
    required: function () {
      return this.type === "boss";
    },
    default: undefined,
  },

  hp: {
    type: Number,
    default: function () {
      return this.type === "boss" ? 100 : 50;
    },
  },
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  background: String,
  levels: [levelSchema],
});

const City = mongoose.model("City", citySchema);
export default City;
