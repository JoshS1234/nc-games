import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/review-list">Reviews</Link>
      <Link to="/user-list">Users</Link>
    </nav>
  );
};

export default NavBar;
