import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import * as Api from "./API";
import Grid from "@mui/material/Grid";
import Home from "./screens/Home";
import Survey from "./screens/Survey";
import CompletedScreen from "./screens/CompletedScreen";

function App() {

  
  return (
    <div className="App" style={{ backgroundColor: "azure", height: "100vh" }}>
      <Grid container alignItems="center" direction="column">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/completed" element={<CompletedScreen />} />

          </Routes>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
