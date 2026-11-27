import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function home() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    setUsers(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.name}`}>
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
          />
        </Link>
      ))}
    </div>
  );
}
export default home;
