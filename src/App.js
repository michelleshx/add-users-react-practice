import React, { useState } from 'react';

import UsersList from './components/Users/UsersList/UsersList';
import UserInput from './components/Users/UserInput/UserInput';

import './App.css';

function App() {
  const [users, setUsers] = useState([
    { name: 'Jane', age: 21, id: 'u1' },
    { name: 'Barry', age: 39, id: 'u2' },
  ]);

  let listOfUsers = <p>No users.</p>;

  if (users.length > 0) {
    listOfUsers = <UsersList users={users} />;
  }

  const addUser = (enteredUserData) => {
    setUsers((prevUsers) => {
      return [enteredUserData, ...prevUsers];
    });
  };

  return (
    <div className="main-page">
      <section className="user-form">
        <UserInput onAddUser={addUser} />
      </section>
      <section className="users-list">{listOfUsers}</section>
    </div>
  );
}

export default App;
