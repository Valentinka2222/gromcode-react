import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button
        dataAction="decrease"
        className="counter__button"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button
        dataAction="increase"
        className="counter__button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
