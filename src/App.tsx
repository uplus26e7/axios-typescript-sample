import React, { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './services/user-service';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Users from JSON Placeholder</h1>
      <code>{JSON.stringify(users)}</code>
    </div>
  );
}

export default App;
