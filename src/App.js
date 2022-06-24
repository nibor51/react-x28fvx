import React from 'react';
import Congrats from './pages/Congrats';
import Home from './pages/Home';
import Game from './pages/Game';
import { randomRange } from './utils/random';
import './style.css';

const number = randomRange(1, 100);
console.log(number);
export default function App() {
  const [round, setRound] = React.useState(-1);
  const [isSame, setIsSame] = React.useState(false);

  return isSame ? (
    <Congrats number={number} round={round} />
  ) : round === -1 ? (
    <Home setRound={setRound} round={round} />
  ) : (
    <Game
      setRound={setRound}
      round={round}
      setIsSame={setIsSame}
      number={number}
      isSame={isSame}
    />
  );
}
