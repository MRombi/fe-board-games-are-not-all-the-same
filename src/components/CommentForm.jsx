import { useState, useEffect, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./context/User";

const CommentForm = ({ setComments }) => {
  const [comment, setComment] = useState("");
  const {username, setUsername }= useContext(UserContext);

  let id = useParams().review_id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setComment("")
    const data = await axios.post(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}/comments`,
      { username: `${username}`, body: `${comment}` }
    );
    setComments((prevComments) => {
      return [comment,...prevComments]
    });
    
    
  };

  return (
    <div>
      <form className="review-comment-post" onSubmit={handleSubmit}>
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
            value={comment}
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
