import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home =  () => {
  const [reviews, setReviews] = useState([])
  useEffect (() => {
   fetchReviews()
  },[])
  
    const fetchReviews = async () => {
      const data = await axios.get(`https://board-games-are-not-the-sames.herokuapp.com/api/reviews`)
      setReviews(data.data.reviews)
    }
  
  return (
    <div>
      {reviews.map(review => {
       return (
        <div className="reviews" key={review.review_id}>
           <Link to={{
            pathname : `/reviews/${review.review_id}`,
            state : {review}
            }}><h4>{review.title}</h4></Link>
       
       <img className="images" src={review.review_img_url} />
       </div>
       )
      })}
    </div>
  )
}

export default Home