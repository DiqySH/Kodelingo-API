import mongoose from "mongoose";

const { Schema, model } = mongoose;

const QuestionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["multiple choice", "essay"],
    required: true,
  },
  options: {
    type: [String],
    default: undefined,
  },
  answer: {
    type: String,
    required: true,
  },
});

const ChallengeSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      enum: ["javascript", "python", "java", "cpp", "other"],
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "intermediate", "difficult"],
      required: true,
    },
    questions: {
      type: [QuestionSchema],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Challenge = model("Challenge", ChallengeSchema);
export default Challenge;
