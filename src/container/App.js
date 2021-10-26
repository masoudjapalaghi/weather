import React from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading";
import Weather from "./weather";
import WeatherGlobalState from "../context/weatherGlobalState";

const App = () => {
  return (
    <BrowserRouter>
    <WeatherGlobalState>
      <Weather />
      <Loading />
    </WeatherGlobalState>
    </BrowserRouter>
  );
};

export default App;
