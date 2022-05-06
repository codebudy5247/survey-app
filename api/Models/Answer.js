const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    question: {
      type: mongoose.Schema.ObjectId,
      ref: "Question",
      // required: true,
    },
    questionId: mongoose.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Answer", answerSchema);
