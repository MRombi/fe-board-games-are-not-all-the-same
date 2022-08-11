import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./context/User";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { username, setUsername } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/users`
    );
    setUsers(data.data.users);
    setIsLoading(false);
  };

  return (
    <div className="home">
      {isLoading && <h3 className="loading">Loading...</h3>}
      <h2>Choose your Avatar!</h2>
      <div className="home-container">
        {users.map((user) => {
          return (
            <div className="profile-container" key={user.username}>
              <Link
                to={{
                  pathname: `/reviews`,
                }}
                onClick={setUsername(user.username)}
              >
                <h3>{user.username}</h3>
              </Link>
              <img
                className="avatar"
                src={user.avatar_url}
                alt={user.username}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
