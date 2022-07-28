import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import ReviewComments from "./ReviewComments";


const Review = () => {
  const [review, setReview] = useState([]);
 
  let id = useParams().review_id;
  useEffect(() => {
    fetchReview();
  }, []);
  const fetchReview = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews/${id}`
    );
    setReview(data.data.review);
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
        Created the:{" "}
                {review.created_at}
            
          </time>
          <ul>
            <li>Comment Count: {review.comment_count}</li>
            <li>Votes: {review.votes}</li>
          </ul>
          <p className="review-body">
          {review.review_body}
          </p>
        </div>
        <ReviewComments />
      </article>
    </div>
  );
};

export default Review;
