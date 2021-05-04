import React, { useState } from 'react';

// import { Container } from './styles';

function Counter() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment + 1
      </button>
    </div>
  )
}

export default Counter;