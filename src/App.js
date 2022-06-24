import React from 'react';
import Counter from './components/Counter';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState();
  return (
    <>
      <Counter />
      <div>Just open me and start coding!</div>
    </>
  );
}
