import { useState } from "react";

export const useTemperature = (initialValue) => {
  const [temperatureValue, setTemperatureValue] = useState(initialValue);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);
    if (newTemperature > 25) {
      setTemperatureColor("hot");
    }
  };
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature < 5) {
      setTemperatureColor("cold");
    }
  };

  return [
    temperatureValue,
    temperatureColor,
    increaseTemperature,
    decreaseTemperature,
  ];
};
