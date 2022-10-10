import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav id="navBar">
        <li>
          <Link to="/"><button className="navButton">Home</button></Link>
        </li>
        <li>
          <Link to="/review-list"><button className="navButton">Reviews</button></Link>
        </li>
        <li>
          <Link to="/user-list"><button className="navButton">Login</button></Link>
        </li>
      </nav>
        </>
  );
};

export default NavBar;
