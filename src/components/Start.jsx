import React from 'react';

export default function Start({ setRound }) {
  return (
    <button
      type="button"
      onClick={() => {
        setRound((round) => round + 1);
      }}
    >
      Start
    </button>
  );
}
