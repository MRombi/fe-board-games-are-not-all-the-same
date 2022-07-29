import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Review from "./components/Review";
import { UserContext } from "./components/context/User";

const App = () => {
  const [username, setUsername] = useState("tickle122")

  return (
    <UserContext.Provider value={{username, setUsername}}>
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
    </UserContext.Provider>
  );
};

export default App;
