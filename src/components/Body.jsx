import React, { useEffect, useState } from "react";
import NumberRow from "./NumberRow";

const Body = ({ sharedValue }) => {
  const totalButtons = 75;
  const buttonsPerRow = 15;
  const totalRows = Math.ceil(totalButtons / buttonsPerRow);
  const [buttonStates, setButtonStates] = useState(
    new Array(totalButtons).fill(false)
  );

  const handleClick = (buttonIndex) => {
    if (!buttonStates[buttonIndex]) {
      // Only update the state if the button is not already clicked
      const updatedButtonStates = [...buttonStates];
      updatedButtonStates[buttonIndex] = true;
      setButtonStates(updatedButtonStates);
    }
  };

  // Update buttonStates when sharedValue changes
  useEffect(() => {
    setButtonStates((prevButtonStates) =>
      prevButtonStates.map((_, index) => {
        const buttonLabel = `${index + 1}`;
        return buttonLabel === sharedValue || prevButtonStates[index];
      })
    );
  }, [sharedValue]);

  return (
    <div className="body">
      <div>Shared Value: {sharedValue}</div>
      <div className="row-container">
        <div className="button-container">
          {Array.from({ length: totalRows }, (_, rowIndex) => (
            <NumberRow
              key={rowIndex}
              buttonStates={buttonStates}
              handleClick={handleClick}
              start={rowIndex * buttonsPerRow}
              end={Math.min((rowIndex + 1) * buttonsPerRow, totalButtons)}
              sharedValue={sharedValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
