import React, { useState, useEffect } from "react";
import { Link, useSearchParams, NavLink } from "react-router-dom";
import axios from "axios";

import SelectCategory from "./SelectCategory";

const Reviews = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    fetchReviews();
    fetchCategories();
    if (term) {
      setSearchParams(`category=${term}`);
    } else setSearchParams(`${term}`);
  }, [term]);

  const fetchReviews = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews`,
      {
        params: {
          category: term,
        },
      }
    );
    setReviews(data.data.reviews);
    setIsLoading(false);
  };
  const fetchCategories = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/categories`
    );
    setCategories(data.data.categories);
  };
  return (
    <div>
      <SelectCategory
        setTerm={setTerm}
        categories={categories}
        setIsLoading={setIsLoading}
      />
      {isLoading && <h3 className="loading">Loading...</h3>}
      {reviews.map((review) => {
        return (
          <div className="reviews" key={review.review_id}>
            <Link
              to={{
                pathname: `/reviews/${review.review_id}`,
              }}
              state={{ votes: votes }}
            >
              <h4>{review.title}</h4>
            </Link>
            <img
              className="images"
              alt={review.title}
              src={review.review_img_url}
            />
            <div className="reviews-data">
              <time dateTime={review.created_at}>
                Created the{" "}
                {review.created_at.slice(0, 10).split("-").reverse().join("-")}
                {` at ${review.created_at.slice(11, 16)}`}
              </time>
              <ul>
                <li>Comment Count: {review.comment_count}</li>
                <li>Votes: {review.votes}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
