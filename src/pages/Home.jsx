import React from 'react';
import Start from '../components/Start';

export default function Home({ setRound, round, setNumber }) {
  return (
    <>
      <p>To begin guessing the number, press the start button!</p>
      <Start setRound={setRound} />
    </>
  );
}
