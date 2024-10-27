import React, { useEffect, useState } from 'react';
import { getHelloMessage } from './apiService';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHelloMessage()
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Select an option"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="logo.png" alt="Logo 1" className="logo" />      
        </div>
        <h2 className="subtitle">Welcome to CureBYTES!</h2>
        <p className="description">
          Our mission is to enhance learning and improve patient care by providing medical students with AI-driven insights on their clinical documentation. We aim to streamline the grading process and deliver constructive feedback, fostering the development of clinical communication.
        </p>
        <p className="status-message">{message ? message : 'Select an option'}</p>
        <div className="button-container">
          <button className="button" id="teacherButton">🍎  Teacher</button>
          <button className="button" id="studentButton">📚 Student</button>
        </div>
      </header>
    </div>
  );
}

export default App;
