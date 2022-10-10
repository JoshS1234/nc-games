import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LoggedIn = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const userLogout = (event) => {
    event.preventDefault();
    setCurrentUser({});
  };

  if (currentUser.username === undefined) {
    return (
      <div className="logInBox">
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="guest profile"
          className="profilePicture"
        />
        <h5>Not logged in</h5>
        <button>
          <Link to="/user-list">Log in</Link>
        </button>
      </div>
    );
  } else {
    return (
      <div className="logInBox">
        <img
          src={currentUser.avatar_url}
          alt="guest profile"
          className="profilePicture"
        />
        <h5>User: {currentUser.username}</h5>
        <button
          onClick={(event) => {
            userLogout(event);
          }}
        >
          Logout
        </button>
      </div>
    );
  }
};

export default LoggedIn;
