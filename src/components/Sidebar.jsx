import { useState } from "react";
import React from "react";

const Sidebar = ({ onValueChange }) => {
  const [entryCount, setEntryCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [previousEntry, setPreviousEntry] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onValueChange(e.target.value); // Pass the value to the parent
  };

  const handleAddItem = () => {
    if (inputValue) {
      const numberValue = parseInt(inputValue, 10); // Parse the input as an integer
      if (!isNaN(numberValue) && numberValue >= 1 && numberValue <= 75) {
        setPreviousEntry(numberValue); // Store the previous entry as a number
        setEntryCount(entryCount + 1);
        setInputValue("");
      } else {
        // Handle invalid input or out-of-range input
        alert("Please enter a valid number between 1 and 75.");
      }
    }
  };

  return (
    <div className="sidebar">
      <div className="detail-cards-wrapper">
        <div className="stats-container">
          <h2 className="stats-header">Total Called</h2>
          <div className="data">{entryCount}</div>
        </div>
        <div className="stats-container">
          <h2 className="stats-header">Previous Number</h2>
          <div className="data">{previousEntry}</div>
        </div>
      </div>
      <div className="number-called-container">
        <h2>Enter Number Called:</h2>
        <input
          className="number-input"
          placeholder="Enter Number"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          min="1"
          max="75"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Enter</button>
      </div>
    </div>
  );
};

export default Sidebar;
