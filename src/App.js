import React, { useEffect, useState } from 'react';
import { getHelloMessage } from './apiService';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHelloMessage()
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error loading message"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Our mission is to enhance learning and improve patient care by providing medical students with AI-driven insights on their clinical documentation. We aim to streamline the grading process and deliver constructive feedback, fostering the development of clinical communication.
        </h2>
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
