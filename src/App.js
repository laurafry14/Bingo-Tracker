import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Bingo from "./components/Bingo";
import { useState } from "react";

function App() {
  const [sharedValue, setSharedValue] = useState("");
  const [undoValue, setUndoValue] = useState(null);

  const handleValueChange = (newValue) => {
    if (newValue.isUndo) {
      setUndoValue(newValue.newValue);
      console.log("hello");
    } else {
      setSharedValue(newValue);
    }
    // setSharedValue(newValue);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body-wrapper">
          <div>
            <Sidebar onValueChange={handleValueChange} />
          </div>
          <div>
            <Bingo />
          </div>
          <div>
            <Body sharedValue={sharedValue} undoValue={undoValue} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
