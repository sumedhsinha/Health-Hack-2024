import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Student!</h1>
        <p>This is the student’s dashboard.</p>
        <button className="button" onClick={() => navigate('/')}>Back to Home</button>
      </header>
    </div>
  );
}

export default StudentPage;
