import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(''); // State for dropdown selection
  const [ratings, setRatings] = useState(Array(25).fill(null)); // State for each row's rating selection

  const options = ['Onset', 'Site', 'Duration', 'Radiation', 'Frequency', 'Quality and Character', 'Progression', 'Severity', 'Aggravating and Relieving Factors', 'Associated Symptoms', 'S.O.B. - Exertion', 'S.O.B. - while flat', 'S.O.B at right', 'Palpitations', 'Ankle Swelling', 'Transient Loss of Consciousness', 'Intermittent Claudication', 'Fever, Fatigue', 'Smoking', 'Hypertension', 'DM', 'F.M. of CAD', 'Previous History of CAD', 'Hyperlipedemia', 'Obesity & Physical Inactivity'];
  
  // Load saved selections from local storage on mount
  useEffect(() => {
    const savedOption = localStorage.getItem('teacherSelection');
    const savedRatings = localStorage.getItem('teacherRatings');
    
    if (savedOption) {
      setSelectedOption(savedOption);
    }
    
    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Handle dropdown form submission
  const handleDropdownSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('teacherSelection', selectedOption);
    alert(`Saved selection: ${selectedOption}`);
  };

  // Handle rating selection change
  const handleRatingChange = (index, value) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = value;
    setRatings(updatedRatings);
  };

  // Handle rating form submission
  const handleRatingSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('teacherRatings', JSON.stringify(ratings));
    alert(`Saved ratings: ${ratings.join(', ')}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Teacher!</h1>
        <p>This is the teacher's dashboard.</p>

        {/* Dropdown selection form */}
        <form onSubmit={handleDropdownSubmit}>
          <label htmlFor="options">Choose Grading Interests and Values</label>
          <select
            id="options"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="" disabled>Select OSCE Type</option>
            <option value="Abdominal Pain">Abdominal Pain</option>
            <option value="Chest Pain">Chest Pain</option>
            <option value="Cough Fever">Cough Fever</option>
            <option value="GI History">GI History</option>
            <option value="Hematemesis">Hematemesis</option>
            <option value="Hemoptysis">Hemoptysis</option>
            <option value="Shortness of Breath">Shortness of Breath</option>
          </select>
          <button type="submit" className="button">Save</button>
        </form>

        <p>1. Analysis of Chest Pain</p>

        <form onSubmit={handleRatingSubmit}>
          <h2>Rate Each Option:</h2>
          <div className="rating-scale">
            <div className="scale-labels">
              <span>1 (Not at all)</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5 (Significantly)</span>
            </div>

            {options.map((option, rowIndex) => (
              <div key={rowIndex} className="rating-row">
                <label>{option}</label>
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name={`rating-${rowIndex}`}
                      value={value}
                      checked={ratings[rowIndex] === value}
                      onChange={() => handleRatingChange(rowIndex, value)}
                      required
                    />
                  </label>
                ))}
              </div>
            ))}
          </div>
          <button type="submit" className="button">Submit Ratings</button>
        </form>

        <button className="button" onClick={() => navigate('/')}>Back to Home</button>
      </header>
    </div>
  );
}

export default TeacherPage;
