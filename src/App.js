import React from "react";
import { useTemperature } from "./useTemperature";
const App = () => {
  const [
    temperatureValue,
    temperatureColor,
    increaseTemperature,
    decreaseTemperature,
  ] = useTemperature(10);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
