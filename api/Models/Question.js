const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    answerCount: {
      type: Number,
      default: 0,
    },
    ratingType:{
        type: Number,
        default: 5,
        maxlength:10
    },
    questionTypeText:{
        type:Boolean,
        default:false
    },
    answers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Answer",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);
