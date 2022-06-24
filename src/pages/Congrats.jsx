import React from 'react';

export default function Congrats({ number, round }) {
  return (
    <p>
      Congratulations, you've found {number} in {round} turn
      {round === 1 ? '' : 's'}.
    </p>
  );
}
