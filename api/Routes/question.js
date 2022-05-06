const express = require("express");
const router = express.Router();
const { createQuestion,getQuestions } = require("../Controller/questionController");

router.post("/", createQuestion);
router.get("/", getQuestions);

module.exports = router;
