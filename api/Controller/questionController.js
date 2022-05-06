const Question = require("../Models/Question");

exports.createQuestion = async (req, res) => {
  const information = req.body;

  const question = await Question.create({
    ...information,
  });

  res.status(200).json({
    success: true,
    message: question,
  });
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json({
      success: true,
      message: questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
