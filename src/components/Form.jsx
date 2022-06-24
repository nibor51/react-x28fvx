import React from 'react';
import { play } from '../utils/play';

export default function Button({ setRound, setIsSame, number, isSame }) {
  const [userNumber, setUserNumber] = React.useState('');
  const [error, setError] = React.useState('');

  const userNumberChange = (e) => {
    setUserNumber(parseInt(e.target.value, 10));
  };

  return (
    <>
      <form onSubmit={play}>
        <label htmlFor="userNumber">Type your number !</label>
        <input
          id="userNumber"
          type="number"
          name="userNumber"
          value={userNumber}
          onChange={userNumberChange}
        ></input>
        <button type="submit">Soumettre</button>
      </form>
      <span>{error}</span>
    </>
  );
}
