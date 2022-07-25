import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// import { useState } from "react";
// import { UserContext } 

import Header from "./components/Header"
import Navigation from "./components/Navigation";
import Reviews from "./components/Home"
import Home from "./components/Reviews"
import Review from "./components/Review";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/reviews" element={<Home/>} />
          <Route path="/" element={<Reviews/>} />
          <Route path="/reviews/:review_id" element={<Review/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
