import Title from "./components/Title";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import React, { useState } from "react";
import "./App.css";

import InfoDetails from "./components/InfoDetails";

function App() {
  const [selectedButton, setSelectedButton] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <Title />
      <Dropdown setCity={setCity} />
      <Button setSelectedButton={setSelectedButton} />
      <InfoDetails city={city} selectedButton={selectedButton} />
    </div>
  );
}

export default App;
