import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/User";
const Home = () => {
  const {username, setUsername }= useContext(UserContext);
  return (
    <div>
      <h2>Welcome back {username}</h2>
      <h2>Reviews</h2>
      <h2>Comments</h2>
    </div>
  )
}

export default Home