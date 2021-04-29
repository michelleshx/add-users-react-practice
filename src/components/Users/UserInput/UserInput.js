import React, { useState } from 'react';
import InvalidInput from './InvalidInput';
import Button from '../../UI/Button';

import './UserInput.css';

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      // empty input
      enteredAge === 0 ||
      enteredName.trim().length === 0
    ) {
      setIsValid(false);
      setInvalidMessage(
        'Please enter a valid name and age (non-empty values).'
      );
      return;
    } else if (enteredAge <= 0) {
      // invalid age
      setIsValid(false);
      setInvalidMessage('Please enter a valid age (>0)');
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onAddUser(userData);

    setEnteredName('');
    setEnteredAge('');
  };

  const onClosePopupHandler = () => {
    setIsValid(true);
  };

  return (
    <div>
      {!isValid && (
        <InvalidInput message={invalidMessage} onClose={onClosePopupHandler} />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className="form-input">
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="form-input">
          <label>Age (Years)</label>
          <input
            type="number"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserInput;
