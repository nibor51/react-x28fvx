import React from 'react';
import Start from '../components/Start';

export default function Home({ setRound, round, setNumber }) {
  return (
    <>
      <p>For play ...</p>
      <Start setRound={setRound} />
    </>
  );
}
