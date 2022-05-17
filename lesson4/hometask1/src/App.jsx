import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="Kiev" offset={20} date={new Date('2015-01-30 10:00:00')} />
      <Clock location="Toronto" offset={5} date={new Date('2015-01-30 6:00:00')} />
      <Clock location="Japan" offset={1} date={new Date()} />
    </>
  );
};
export default App;
