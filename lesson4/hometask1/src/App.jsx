import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="Kiev" offset={20} date={new Date()}/>
      <Clock location="Toronto" offset={5} date={ new Date()} />
      <Clock location="Japan" offset={1} date={ new Date()}  />
    </>
  );
};
export default App;
