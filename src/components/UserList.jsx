import "./UserList.css";
import { useState, useEffect } from "react";
import axios from "axios";

import User from "./User";
import IsLoading from "./isLoading";

const UserList = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (res.status === 200) {
          setUsers(res.data);
        } else {
          throw new Error(`Failed to fetch data with status: ${res.data}`);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {isLoading && <IsLoading />}
      {error && <p className="error">{error}</p>}
      <div className="userList">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
