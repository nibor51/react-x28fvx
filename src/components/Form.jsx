import React from 'react';

export default function Button({ setRound, setIsSame, isSame, number }) {
  const [userNumber, setUserNumber] = React.useState('');
  const [error, setError] = React.useState('');
  const [hint, setHint] = React.useState('');

  function play(e) {
    e.preventDefault();
    setError('');
    if (Number.isInteger(userNumber) && userNumber > 0 && userNumber <= 100) {
      setRound((round) => round + 1);
      setIsSame(userNumber == number);
      if (userNumber < number) {
        setHint(`You tried ${userNumber} it's more`);
      } else if (userNumber > number) {
        setHint(`You tried ${userNumber} it's less`);
      } else {
        setHint('');
      }
    } else {
      setError('Your suggestion must be a number between 1 and 100!');
    }
    setUserNumber('');
  }

  const userNumberChange = (e) => setUserNumber(parseInt(e.target.value, 10));

  return (
    <>
      <p>{hint}</p>
      <form onSubmit={play}>
        <label htmlFor="userNumber">Type your number !</label>
        <input
          id="userNumber"
          type="number"
          name="userNumber"
          value={userNumber}
          onChange={userNumberChange}
        ></input>
        <span>{error}</span>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
