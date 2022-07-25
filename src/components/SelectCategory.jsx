import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SelectCategory({categories, setTerm}) {
  

  useEffect(() => {
  }, []);

  

  function handleSubmit(event) {
    event.preventDefault();
    setTerm("")
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
          return <option value={category.slug} key={category.slug}>{category.slug}</option>;
        })}
      </select>
    </form>
  );
}
