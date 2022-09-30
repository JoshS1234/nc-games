import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/review-list">Reviews</Link>
        </li>
        <li>
          <Link to="/user-list">Users</Link>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
