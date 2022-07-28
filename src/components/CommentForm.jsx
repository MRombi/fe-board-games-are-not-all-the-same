import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
const CommentForm = () => {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  let id = useParams().review_id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(comment, username);
    const data = await axios.post(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}/comments`,
      { username: `${username}`, body: `${comment}` }
    );
     console.log(data);
  };

  return (
    <div>
      <form className="review-comment-post" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="username"
        />
        <div>
          <div>
            <label htmlFor="comment">Post your comment below </label>
          </div>
          <textarea
            placeholder="Post your comment"
            name=""
            id="comment"
            cols="30"
            rows="10"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
