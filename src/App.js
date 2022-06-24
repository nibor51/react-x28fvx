import React from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import { randomRange } from './utils/random';
import './style.css';

const number = randomRange(1, 100);
console.log(number);
export default function App() {
  const [round, setRound] = React.useState(-1);
  const [userNumber, setUserNumber] = React.useState();
  return (
    <>
      {round === -1 ? (
        <div>Welcome ! For play a guess number ! Click on Start button !</div>
      ) : (
        <>
          <label htmlFor="userNumber">Type your number !</label>
          <input id="userNumber" type="number"></input>
          <Counter round={round} />
        </>
      )}
      <Button setRound={setRound} round={round} />
    </>
  );
}
