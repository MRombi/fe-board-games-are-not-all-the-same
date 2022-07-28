import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import ReviewComments from "./ReviewComments";

const Review = () => {
  const [review, setReview] = useState([]);
  const [votes, setVotes] = useState();
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);

  let id = useParams().review_id;
  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}`
    );
    setReview(data.data.review);
    setVotes(data.data.review.votes);
  };

  const handleVote = (e) => {
    if (e.target.innerText === "Upvote") {
      setVotes((currVotes) => {
        if (!hasUpvoted) {
          setHasDownvoted(false);
          setHasUpvoted(true);
          const data = axios.patch(
            `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}`,
            { inc_votes: 1 }
          );
          return currVotes + 1;
        } else {
          alert("You have already Upvoted");
          return currVotes;
        }
      });
    } else {
      setVotes((currVotes) => {
        if (!hasDownvoted) {
          setHasUpvoted(false);
          setHasDownvoted(true);
          const data = axios.patch(
            `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}`,
            { inc_votes: -1 }
          );
          return currVotes - 1;
        } else {
          alert("You have already Downvoted");
          return currVotes;
        }
      });
    }
  };

  return (
    <div>
      <article className="review-card">
        <h4>{review.title}</h4>
        <div className="review-card-media">
          <img className="images" src={review.review_img_url} />
        </div>
        <div className="review-data">
          <time dateTime={review.created_at}>
            Created the: {review.created_at}
          </time>
          <div className="review-comment-count-container">
            Comment Count: {review.comment_count}
          </div>
          <div className="review-votes-container">
            Votes: {votes}{" "}
            <button className="button-increase" onClick={handleVote}>
              Upvote
            </button>{" "}
            <button className="button-decrease" onClick={handleVote}>
              Downvote
            </button>
          </div>
          <p className="review-body">{review.review_body}</p>
        </div>
        <ReviewComments />
      </article>
    </div>
  );
};

export default Review;
