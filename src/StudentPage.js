import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function StudentPage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Load saved input from local storage when the component mounts
  useEffect(() => {
    const savedInput = localStorage.getItem('studentInput');
    const savedOutput = localStorage.getItem('studentOutput');
    if (savedInput) {
      setInputText(savedInput); 
    }
    if (savedOutput) {
      setOutputText(savedOutput); 
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    localStorage.setItem('studentInput', inputText);
    alert(`Saved text: ${inputText}`);
    setInputText(''); 
  };

  return (
    <div className="student-page">
      <header className="student-page-header">
        <img src="/logo.png" alt="Logo" className="logo" />

        <h1 className="title">Welcome, Student!</h1>
        <p className="description">This is the student’s dashboard.</p>

        <form onSubmit={handleSubmit} style={{ width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '75px', justifyContent: 'center' }}>
            <div style={{ flex: 1, minWidth: '45%', textAlign: 'center' }}>
              <label
                htmlFor="inputText"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  textAlign: 'left', 
                  paddingLeft: '2px' // Adjust padding to align with textarea
                }}
              >
                Please input medical notes
              </label>
              <textarea
                id="inputText"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here"
                required 
                className="input-text"
                style={{ width: '100%', paddingLeft: '2px' }} // Matching padding for alignment
              />
            </div>
            <div style={{ flex: 1, minWidth: '45%', textAlign: 'center' }}>
              <label
                htmlFor="outputText"
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  textAlign: 'left', 
                  paddingLeft: '2px' // Adjust padding to align with textarea
                }}
              >
                Personalized Feedback
              </label>
              <textarea
                id="outputText"
                value={outputText}
                readOnly
                placeholder="Read-only text"
                className="input-text"
                style={{ width: '100%', paddingLeft: '2px' }} // Matching padding for alignment
              />
            </div>
          </div>
          <div className="button-container" style={{ marginTop: '10px' }}>
            <button type="submit" className="button">Save</button>
            <button type="button" className="button" onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default StudentPage;
