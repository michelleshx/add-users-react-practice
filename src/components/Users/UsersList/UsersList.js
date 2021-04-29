import React from 'react';
import User from '../User/User';

import './UsersList.css';

const UsersList = (props) => {
  return (
    <ul className="users-list">
      {props.users.map((user) => (
        <User key={user.id} id={user.id}>
          {user.name} ({user.age} years old)
        </User>
      ))}
    </ul>
  );
};

export default UsersList;
