// import { useState, useEffect } from 'react'
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#0d0d0d", overflow: "hidden" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
