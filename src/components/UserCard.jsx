import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const UserCard = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const userLogin = (event) => {
    event.preventDefault();
    setCurrentUser(user);
  };

  const userLogout = (event) => {
    event.preventDefault();
    setCurrentUser({});
  };

  return (
    <div>
      <img
        src={`${user.avatar_url}`}
        alt={`portrait of ${user.avatar_url}`}
        className="profilePictureUserCard"
      />
      <h4>Username: {user.username}</h4>
      <h4>User: {user.name}</h4>
      {user.username === currentUser.username ? (
        <div>
          <h5>Currently logged in</h5>
          <button
            onClick={(event) => {
              userLogout(event);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={(event) => {
            userLogin(event);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserCard;
