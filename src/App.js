import React from 'react';
import Start from './components/Start';
import Counter from './components/Counter';
import Form from './components/Form';
import { randomRange } from './utils/random';
import './style.css';

const number = randomRange(1, 100);
console.log(number);
export default function App() {
  const [round, setRound] = React.useState(-1);
  const [isSame, setIsSame] = React.useState(false);
  console.log(isSame);

  return isSame ? (
    <div>
      Congratulations, you've found {number} in {round} turn
      {round === 1 ? '' : 's'}
    </div>
  ) : round === -1 ? (
    <>
      <div>Welcome ! For play a guess number ! Click on Start button !</div>
      <Start setRound={setRound} round={round} />
    </>
  ) : (
    <>
      <Form
        setRound={setRound}
        round={round}
        setIsSame={setIsSame}
        number={number}
        isSame={isSame}
      />
      <Counter round={round} />
    </>
  );
}
