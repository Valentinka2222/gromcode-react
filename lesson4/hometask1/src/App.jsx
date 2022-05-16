import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="Kiev" offset={20} />
      <Clock location="Toronto" offset={5} />
      <Clock location="Japan" offset={1} />
    </>
  );
};
export default App;
