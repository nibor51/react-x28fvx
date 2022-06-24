import React from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState();
  return (
    <>
      <Counter count={count} />
      <div>Just open me and start coding!</div>
      <Button setCount={setCount} />
    </>
  );
}
