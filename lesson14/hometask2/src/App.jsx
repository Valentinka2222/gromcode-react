import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisble, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(!isVisble);
  };

  return (
    <div>
      <button onClick={handleHide} className="btn">
        Show
      </button>
      <div>
        {isVisble ? (
          <>
            <Clock location="Kiev" offset={20} />
            <Clock location="Toronto" offset={5} />
            <Clock location="Japan" offset={1} />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default App;
