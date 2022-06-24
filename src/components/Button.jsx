import React from 'react';

export default function Button({ round, setRound }) {
  return (
    <button type="button" onClick={() => play()}>
      {round === -1 ? 'Start' : 'Soumettre'}
    </button>
  );
}
