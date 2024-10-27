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
      <header className="App-header">
        <h1>Welcome, Student!</h1>
        <p>This is the student’s dashboard.</p>

        <form onSubmit={handleSubmit}> {/* Form element to handle input */}
          <input
            type="text"
            value={inputText} // Controlled input
            onChange={(e) => setInputText(e.target.value)} // Update state on input change
            placeholder="Enter your text here" // Placeholder text
            required // Optional: Make the input required
          />
          <button type="submit" className="button">Save</button> {/* Save button */}
        </form>

        <button className="button" onClick={() => navigate('/')}>Back to Home</button>
      </header>
    </div>
  );
}

export default StudentPage;