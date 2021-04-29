import React from 'react';

import './User.css';

const User = (props) => {
  return <li className="single-user">{props.children}</li>;
};

export default User;
