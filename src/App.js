import React, { useEffect, useState } from 'react';
import { getHelloMessage } from './apiService';
import './App.css'; // Ensure your CSS file is imported

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHelloMessage().then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message ? message : 'Loading...'}</p>
        <div className="button-container">
          <button className="button" id="teacherButton">Teacher</button>
          <button className="button" id="studentButton">Student</button>
        </div>
      </header>
    </div>
  );
}

export default App;