import "./App.css";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
// import { UserContext } 

import Header from "./components/Header"
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews"
import Home from "./components/Home"
import Review from "./components/Review";


const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/reviews/:review_id" element={<Review/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
