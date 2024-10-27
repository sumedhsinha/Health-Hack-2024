import React from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Teacher!</h1>
        <p>This is the teacher’s dashboard.</p>
        <button className="button" onClick={() => navigate('/')}>Back to Home</button>
      </header>
    </div>
  );
}

export default TeacherPage;
