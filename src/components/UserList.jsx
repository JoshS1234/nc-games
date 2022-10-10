import { getUsers } from "./API-calls";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUserList(data.users);
    });
  }, []);

  return (
    <div className="userList">
      <h2>Users List</h2>
      <ul >
        {userList.map((user) => {
          return (
            <li key={user.username} className="userCard">
              <UserCard user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserList;
