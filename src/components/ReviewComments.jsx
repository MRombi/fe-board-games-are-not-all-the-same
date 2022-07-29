import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

const ReviewComments = () => {
  const [comments, setComments] = useState([]);
  const [selected, setSelected] = useState([]);
  let id = useParams().review_id;

  useEffect(() => {
    fetchCommentsByReview();
    handleDelete();
  }, []);
  const fetchCommentsByReview = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}/comments`
    );
    setComments(data.data.comments.reverse());
  };

  const handleDelete = () => {
    selected.forEach((comment_id) => {
      const data = axios.delete(
        `https://board-games-are-not-the-sames.herokuapp.com/api/comments/${comment_id}`
      );
      setComments((prevComments) => {
        return prevComments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
    });
    setSelected([]);
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
            <ul className="comment-list">
              {comments.map((comment) => {
                return (
                  <li key={comment.comment_id} className="review-comment-li">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id={comment.comment_id}
                      onClick={() => {
                        setSelected((prevSelected) => {
                          return [comment.comment_id, ...prevSelected];
                        });
                      }}
                    ></input>
                    <label htmlFor={comment.comment_id}> {comment.body}</label>
                  </li>
                );
              })}
            </ul>
            <div className="delete-comments-button">
              <button onClick={handleDelete}>Delete Selected Comments</button>
            </div>
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
