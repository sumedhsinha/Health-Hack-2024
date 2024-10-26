import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${API_BASE_URL}`);
      setMessage(response.data);
    }

    fetchData();
    return () => {
      console.log('Cleanup');
    }
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
