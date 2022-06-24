import React from 'react';
import { randomRange } from './utils/random';
import Congrats from './pages/Congrats';
import Home from './pages/Home';
import Game from './pages/Game';
import Restart from './components/Restart';
import './style.css';

export default function App() {
  const [round, setRound] = React.useState(-1);
  const [isSame, setIsSame] = React.useState(false);
  const [number, setNumber] = React.useState(randomRange(1, 100));
  console.log(number);

  return (
    <>
      <header>
        <h1>Guess Number</h1>
        <p>Find the number in the least amount of turns!</p>
      </header>
      <main>
        {isSame ? (
          <>
            <Congrats number={number} round={round} />
            <Restart
              setRound={setRound}
              setIsSame={setIsSame}
              setNumber={setNumber}
            />
          </>
        ) : round === -1 ? (
          <Home setRound={setRound} round={round} setNumber={setNumber} />
        ) : (
          <Game
            setRound={setRound}
            round={round}
            setIsSame={setIsSame}
            number={number}
            isSame={isSame}
          />
        )}
      </main>
    </>
  );
}
