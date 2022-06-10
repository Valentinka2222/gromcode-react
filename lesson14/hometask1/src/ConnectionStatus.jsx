import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
     setIsOnline((prev) => {
      if (!prev) { return false }
      return true
    });
    window.addEventListener('online', () => setIsOnline());
    window.addEventListener('offline', () => setIsOnline());
    return window.removeEventListener('online', () => setIsOnline());
    
  }, [isOnline]);
  return (
    <div className={isOnline ? 'status' : 'status status_offline'}>
      {isOnline ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
