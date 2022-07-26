import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Review from "./components/Review";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
