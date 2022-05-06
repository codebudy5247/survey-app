const express = require("express");
const router = express.Router();
const { createAnswer } = require("../Controller/answerController");

router.post("/", createAnswer);

module.exports = router;
