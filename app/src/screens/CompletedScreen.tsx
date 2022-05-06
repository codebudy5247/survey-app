import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CompletedScreen = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  if (counter === 0) {
    navigate("/");
  }

  return (
    <Box sx={{ mt: 15 }}>
      <Typography
        variant="h3"
        sx={{ fontFamily: "sans-serif", fontWeight: "bold", color: "gray" }}
      >
        Thanks for your time.Your response was recorded.
      </Typography>
      
      <Typography
        variant="h2"
        sx={{ fontFamily: "sans-serif", fontWeight: "bold", color: "gray" }}
      >
   {counter}
      </Typography>
      
    </Box>
  );
};

export default CompletedScreen;
