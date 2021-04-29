import React from 'react';
import Button from '../../UI/Button';

import './InvalidInput.css';

const InvalidInput = (props) => {
  return (
    <div className="invalid-screen">
      <div className="invalid-screen__popup">
        <h2 className="invalid-screen__popup--heading">Invalid input</h2>
        <div className="invalid-screen__popup--text">
          <p>{props.message}</p>

          <button
            className="invalid-screen__popup--btn"
            type="button"
            onClick={props.onClose}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvalidInput;
