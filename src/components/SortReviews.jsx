const SortReviews = ({ setSortBy, setIsLoading, setOrder }) => {
  const options = ["created_at", "votes", "comment_count"];

  return (
    <div className="select-container">
    <form className="sort-reviews">
      <label htmlFor="category-sort">Sort By: </label>
      <select
        name="sort-by"
        id="sort-by-select"
        onChange={(event) => {
          setSortBy(event.target.value);
          setIsLoading(true);
        }}
      >
        <option value={options[0]}>Date of Creation</option>
        <option value={options[1]}>Vote Count</option>
        <option value={options[2]}>Comment Count</option>
      </select>
      </form>
      <form className="sort-reviews">
      <label htmlFor="order-select">Order By: </label>
      <select
        name="order-by"
        id="order-select"
        onChange={(event) => {
          setOrder(event.target.value);
          setIsLoading(true);
        }}
      >
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
      </form>
      </div>
  );
};

export default SortReviews;
