import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/reviews">
          <li>Reviews</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
