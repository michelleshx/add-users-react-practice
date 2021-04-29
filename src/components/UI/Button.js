import React from 'react';
import './Button.css';
const Button = (props) => {
  return (
    <button type={props.type} className="button" onClick={props.onCLick}>
      {props.children}
    </button>
  );
};

export default Button;
