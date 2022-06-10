import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    return function () {
      window.removeEventListener('online', isOnline => setIsOnline(isOnline));
      window.removeEventListener('offline', () => setIsOnline());
    };
  }, [isOnline]);
  return (
    <div className={isOnline ? 'status' : 'status status_offline'}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
