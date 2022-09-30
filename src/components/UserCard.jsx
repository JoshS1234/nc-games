const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <img
        src={`${user.avatar_url}`}
        alt={`portrait of ${user.avatar_url}`}
        className="profilePicture"
      />
      <h4>Username: {user.username}</h4>
      <h4>User: {user.name}</h4>
      <button>Login</button>
    </div>
  );
};

export default UserCard;
