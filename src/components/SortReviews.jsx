const SortReviews = ({ setSortBy, setIsLoading, setOrder }) => {
  const options = ["created_at", "votes", "comment_count"];
  const orderedBy = ["DESC", "ASC"];

  return (
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
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label htmlFor="order-select">Order By: </label>
      <select
        name="order-by"
        id="order-select"
        onChange={(event) => {
          setOrder(event.target.value);
          setIsLoading(true);
        }}
      >
        {orderedBy.map((order) => {
          return (
            <option value={order} key={order}>
              {order}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default SortReviews;
