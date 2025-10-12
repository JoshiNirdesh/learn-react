import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {user.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default FetchApi;
