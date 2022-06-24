import React from 'react';

export default function Congrats({ number, round }) {
  return (
    <div>
      Congratulations, you've found {number} in {round} turn
      {round === 1 ? '' : 's'}
    </div>
  );
}
