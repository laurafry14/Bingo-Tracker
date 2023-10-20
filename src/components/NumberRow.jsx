function NumberRow({ buttonStates, handleClick, start, end, sharedValue }) {
  return (
    <div className="button-row">
      {buttonStates.slice(start, end).map((isClicked, index) => {
        const buttonLabel = `${start + index + 1}`;
        const isMatching = buttonLabel === sharedValue;
        console.log(
          `Button Label: ${buttonLabel}, Shared Value: ${sharedValue}, Is Matching: ${isMatching}`
        );
        return (
          <button
            key={start + index}
            onClick={() => handleClick(start + index)}
            className={
              isMatching ? "matching" : isClicked ? "clicked" : "not-clicked"
            }
          >
            {buttonLabel}
          </button>
        );
      })}
    </div>
  );
}

export default NumberRow;
