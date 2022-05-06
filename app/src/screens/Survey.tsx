import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../API";
import Rating from "./Rating";

const Survey = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [activeQuestion, setActiveQuestion] = useState<any>(null);
  const [rating, setRating] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleChange = (event: any) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = async () => {
    if (activeQuestion) {
      const createAnswerObject: Answer = {
        questionId: activeQuestion._id,
        rating: rating,
        content: answer,
      };

      const [error, response] = await Api.createAnswer(createAnswerObject);

      if (response) {
        localStorage.setItem("survey completed", "COMPLETED");
        navigate("/completed");
      }
    }
  };

  useEffect(() => {
    // setCount(0);
    const init = async () => {
      const [err, res] = await Api.getAllQuestions();
      if (err) {
        console.log(err);
      }
      setQuestions(res?.message);
      setActiveQuestion(res?.message[count]);
    };
    init();
  }, []);

  const handlePreviousItem = () => {
    setActiveQuestion(questions[count - 1]);
    setCount(count - 1);
    if (questions[count - 1] == undefined) {
      window.location.reload();
    }
  };

  const handleNextItem = async () => {
    setActiveQuestion(questions[count + 1]);
    setCount(count + 1);
    if (questions[count + 1] == undefined) {
      window.location.reload();
    }

    const createAnswerObject: Answer = {
      questionId: activeQuestion._id,
      rating: rating,
      content: answer,
    };

    const [error, response] = await Api.createAnswer(createAnswerObject);
  };

  const getRatingValue = (value: number) => {
    setRating(value);
  };
  return (
    <>
      {activeQuestion ? (
        <>
          <Grid
            item
            xs={6}
            sm={6}
            sx={{
              p: 4,
              mt: 4,
              width: "40%",
              height: "40%",
              bgcolor: "background.paper",
              border: "1px",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{ mt: 3, mb: 2, color: "gray" }}
              variant="h4"
              component="div"
            >
              Customer Survey
            </Typography>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="subtitle1" sx={{ color: "grey" }}>
                  {" "}
                  {count} / {questions.length}
                </Typography>
              </Box>
              <Typography
                sx={{ mt: 3, mb: 2, color: "grey" }}
                variant="h6"
                component="div"
              >
                {count}.{""} {activeQuestion?.content}
              </Typography>

              {activeQuestion?.questionTypeText ? (
                <TextField
                  id="outlined-basic"
                  label="Your Answer"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              ) : (
                <Rating
                  maxValue={activeQuestion?.ratingType}
                  getRatingValue={getRatingValue}
                />
              )}
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 5 }}
            >
              <Box>
                {" "}
                <Button
                  variant="contained"
                  onClick={handlePreviousItem}
                  disabled={count === 0}
                >
                  {" "}
                  Previous
                </Button>{" "}
              </Box>
              <Box>
                {" "}
                <Button variant="contained" onClick={handleNextItem}>
                  {" "}
                  Skip
                </Button>{" "}
              </Box>
              <Box>
                {count === questions.length - 1 ? (
                  <>
                    <Button variant="contained" onClick={handleSubmit}>
                      {" "}
                      Submit
                    </Button>{" "}
                  </>
                ) : (
                  <>
                    <Button variant="contained" onClick={handleNextItem}>
                      {" "}
                      Next
                    </Button>{" "}
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Survey;
