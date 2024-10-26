import React, { useEffect, useState } from 'react';
import { getHelloMessage } from './apiService';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHelloMessage().then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message ? message : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;
