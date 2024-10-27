import React, { useState, useEffect } from 'react'; // Import useEffect for lifecycle management
import { useNavigate } from 'react-router-dom';
import './App.css';

function StudentPage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState(''); // State to hold the input text

  // Load saved input from local storage when the component mounts
  useEffect(() => {
    const savedInput = localStorage.getItem('studentInput'); // Retrieve from local storage
    if (savedInput) {
      setInputText(savedInput); // Set the input state to the saved value
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    localStorage.setItem('studentInput', inputText); // Save input to local storage
    alert(`Saved text: ${inputText}`); // Action to perform with the input text
    setInputText(''); // Clear the input after submission
  };

  return (
    <div className="student-page">
      <header className="student-page-header">
        <img src="/logo.png" alt="Logo" className="logo" /> {/* Logo from public directory */}
        
        <h1 className="title">Welcome, Student!</h1> {/* First text below the logo */}
        <p className="description">This is the student’s dashboard.</p> {/* Description below the title */}

        <form onSubmit={handleSubmit} style={{ width: '19git 0%', textAlign: 'center' }}> {/* Full width for input */}
          <textarea
            value={inputText} // Controlled input
            onChange={(e) => setInputText(e.target.value)} // Update state on input change
            placeholder="Enter your text here" // Placeholder text
            required // Optional: Make the input required
            className="input-text" // Use a class for styling
          />
          <div className="button-container">
            <button type="submit" className="button">Save</button> {/* Save button */}
            <button type="button" className="button" onClick={() => navigate('/')}>Back to Home</button> {/* Back to Home button */}
          </div>
        </form>
      </header>
    </div>
  );
}

export default StudentPage;
