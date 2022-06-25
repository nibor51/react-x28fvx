import React from 'react';
import Counter from '../components/Counter';
import Form from '../components/Form';

export default function Game({ number, round, setRound, isSame, setIsSame }) {
  return (
    <>
      <Form
        setRound={setRound}
        round={round}
        setIsSame={setIsSame}
        number={number}
        isSame={isSame}
      />

      <p></p>
      {round >= 1 ? (
        <p>
          You are on {round}
          <sup>
            {round == 1 ? 'st' : round == 2 ? 'nd' : round == 3 ? 'rd' : 'th'}
          </sup>{' '}
          tentative.
        </p>
      ) : (
        ''
      )}
    </>
  );
}
