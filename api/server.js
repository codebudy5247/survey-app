const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();
dotenv.config();

app.get("/", (req, res) => {
  res.send("APIs Up && running");
});

app.use('/api/question',require('./Routes/question'));
app.use('/api/answer',require('./Routes/answer'));


const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
