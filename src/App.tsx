import React, { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './services/user-service';
import { User } from './models/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Users from JSON Placeholder</h1>
      <ul>
        {users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
