import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const UserCard = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const userLogin = (event) => {
    event.preventDefault();
    setCurrentUser(user);
  };

  return (
    <div className="userCard">
      <img
        src={`${user.avatar_url}`}
        alt={`portrait of ${user.avatar_url}`}
        className="profilePicture"
      />
      <h4>Username: {user.username}</h4>
      <h4>User: {user.name}</h4>
      <button
        onClick={(event) => {
          userLogin(event);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default UserCard;
