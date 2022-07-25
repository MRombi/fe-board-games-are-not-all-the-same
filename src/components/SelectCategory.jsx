import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SelectCategory() {
  const [categories, setCategories] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await axios.get(
      `https://board-games-are-not-the-sames.herokuapp.com/api/categories`
    );
    setCategories(data.data.categories);
  };
  console.log(term);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form className="SelectCategory" onSubmit={handleSubmit}>
      <label htmlFor="category-select">Choose category: </label>
      <select
        name="category"
        id="category-select"
        onChange={(event) => {
          setTerm(event.target.value);
        }}
      >
        <option value="">--Please choose an option--</option>
        {categories.map((category) => {
          return <option value={category.slug}>{category.slug}</option>;
        })}
      </select>
    </form>
  );
}
