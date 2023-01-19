import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { Box, Typography } from "@mui/material";
import LocationCard from "./Components/LocationCard";

import Footer1 from "./Components/Footer1";
import Collection from "./Components/Collection";
import Login from "./pages/Login";
import react from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Explore from "./pages/Explore";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<SignupPage />} />
          <Route path="explore" element={<Explore />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
