import React from 'react';
import Counter from '../components/Counter';
import Form from '../components/Form';

export default function Congrats({
  number,
  round,
  setRound,
  isSame,
  setIsSame,
}) {
  return (
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
