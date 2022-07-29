import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

import SelectCategory from "./SelectCategory";
import SortReviews from "./SortReviews";

const Reviews = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  useEffect(() => {
    fetchReviews();
    fetchCategories();
    if (term) {
      setSearchParams(`category=${term}&sort_by=${sortBy}&order=${order}`);
    } else setSearchParams(`${term}&sort_by=${sortBy}&order=${order}`);
  }, [term, sortBy, order]);

  const fetchReviews = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/reviews`,
      {
        params: {
          category: term,
          sort_by: sortBy,
          order: order,
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
    <div className="reviews-container">
      <SelectCategory
        setTerm={setTerm}
        categories={categories}
        setIsLoading={setIsLoading}
      />
      <SortReviews
        setIsLoading={setIsLoading}
        setSortBy={setSortBy}
        setOrder={setOrder}
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
              <h4 className="reviews-data">{review.title}</h4>
            </Link>
            <img
              className="images"
              alt={review.title}
              src={review.review_img_url}
            />
            <div className="reviews-data">
              <time className="reviews-data" dateTime={review.created_at}>
                Created the{" "}
                {review.created_at.slice(0, 10).split("-").reverse().join("-")}
                {` at ${review.created_at.slice(11, 16)}`}
              </time>
              <ul>
                <li className="reviews-data">Comment Count: {review.comment_count}</li>
                <li className="reviews-data">Votes: {review.votes}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
