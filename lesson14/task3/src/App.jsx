import React, { useState } from 'react';
import Dimensions from './Dimensions';

const App = () => {
  const [isVisble] = useState(true);
  return (
    <div>
      <div>{isVisble && <Dimensions />}</div>
    </div>
  );
};
export default App;
