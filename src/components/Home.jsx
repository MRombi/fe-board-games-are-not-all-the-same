import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./context/User";
import axios from "axios";

const Home = () => {
  const { username, setUsername } = useContext(UserContext);
  const [user, setUser] = useState([])
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/users`
    );
    setUser(data.data.users[0])
  }
    
  return (
    <div className="home-container">
      <h2>Welcome back {user.name}</h2>
      <div className="avatar-container">
      <img className="avatar" src={user.avatar_url} alt="Avatar with wobbly arms and a blue hat" />
      <h4>{username} 's avatar</h4>
      </div>
      <h3 className="prolific">Our Most Prolific Review Writer!</h3>
    </div>
  );
};

export default Home;
