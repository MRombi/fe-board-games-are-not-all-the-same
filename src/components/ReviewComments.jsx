import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import CommentForm from "./CommentForm";

const ReviewComments = () => {
  const [comments, setComments] = useState([]);
  let id = useParams().review_id;

  useEffect(() => {
    fetchCommentsByReview();
  }, []);
  const fetchCommentsByReview = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}/comments`
    );
    setComments(data.data.comments.reverse());
  };

  return (
    <div>
      {" "}
      <div>
        {" "}
        {comments.length > 0 ? (
          <div className="review-comments-container">
            {" "}
            <div>
              <p>Comments:</p>
            </div>
            <ul>
              {comments.map((comment) => {
                return (
                  <li key={comment.comment_id} className="review-comment-li">
                    {comment.body}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="review-comments-container">
            <p>No Comments yet, be the first!</p>
          </div>
        )}
      </div>
      <CommentForm comments={comments} setComments={setComments} />
    </div>
  );
};

export default ReviewComments;
