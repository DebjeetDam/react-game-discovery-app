import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
function Data() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  interface User {
    id: number;
    name: string;
  }

  useEffect(() => {
    const controller = new AbortController();

    //get -> wait -> res /err
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger"> {error} </p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}{" "}
            <button className="btn btn-outline-danger">Delete</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Data;
