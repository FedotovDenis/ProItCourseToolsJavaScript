import { useState } from 'react';

function CounterOld1() {
  const [count, setCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setDecrementCount(decrementCount - 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button primary onClick={increment}>Click me</button>

      <p>You clicked {decrement} times</p>
      <button onClick={decrement}>Click me</button>
    </div>
  );
}

export default CounterOld1;
