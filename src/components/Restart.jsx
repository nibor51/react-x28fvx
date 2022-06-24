import React from 'react';
import { randomRange } from '../utils/random';

export default function Restart({ setRound, setIsSame, setNumber }) {
  return (
    <button
      type="button"
      onClick={() => {
        setRound(0);
        setIsSame(false);
        setNumber(randomRange(1, 100));
      }}
    >
      Restart
    </button>
  );
}
