import React from "react";

export default function SelectCategory({
  categories,
  setTerm,
}) {
 
  return (
    <form className="SelectCategory">
      <label htmlFor="category-select">Choose a category: </label>

      <select
        name="category"
        id="category-select"
        onChange={(event) => {
          setTerm(event.target.value);
        }}
      >
        <option value="">--All the Categories--</option>
        {categories.map((category) => {
          return (
            <option value={category.slug} key={category.slug}>
              {category.slug[0].toUpperCase() + category.slug.slice(1)}
            </option>
          );
        })}
      </select>
    </form>
  );
}
