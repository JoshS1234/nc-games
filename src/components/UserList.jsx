import { getUsers } from "./API-calls";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => {
      console.log(data);
      setUserList(data.users);
    });
  }, []);

  return (
    <div>
      <h1>The user list router is working</h1>
      <ul className="userList">
        {userList.map((user) => {
          return (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserList;
