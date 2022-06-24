import React from 'react';

export default function Button({ setRound, setIsSame, number, isSame }) {
  const [userNumber, setUserNumber] = React.useState('');
  const [error, setError] = React.useState('');
  function play(e) {
    e.preventDefault();
    setUserNumber(parseInt(userNumber, 10));
    if (userNumber !== NaN && userNumber > 0 && userNumber <= 100) {
      console.log(typeof userNumber);
      console.log(number);
      setRound((round) => round + 1);
      setIsSame(userNumber == number);
      console.log('true?' + isSame);
    } else {
      setError('Votre proposition doit être un nombre entre 1 et 100 !');
    }
    setUserNumber('');
  }
  const userNumberChange = (e) => {
    setUserNumber(e.target.value);
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
