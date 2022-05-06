const Answer = require("../Models/Answer");
const Question = require("../Models/Question");

exports.createAnswer = async (req, res) => {
  try {
    const { questionId, content, rating } = req.body;

    const question = await Question.findById(questionId);
    if (!question)
      return res.status(400).json({ msg: "This question does not exist." });

    const newAnswer = new Answer({
      content,
      questionId,
      rating,
    });

    await Question.findOneAndUpdate(
      { _id: questionId },
      {
        $push: { answers: newAnswer },
      },
      { new: true }
    );

    await newAnswer.save();

    res.json({ newAnswer });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
