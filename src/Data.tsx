import axios from "axios";
import { useEffect, useState } from "react";
function Data() {
  const [users, setUsers] = useState<User[]>([]);

  interface User {
    id: number;
    name: string;
  }

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Data;
