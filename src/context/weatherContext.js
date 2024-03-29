import { createContext } from "react";

const weatherContext = createContext({
  place:'',
  setPlace: () => {},
  time:'',
  setTime: () => {},
  network:'',
  setNetwork: () => {},
  localTime:'',
  setLocalTime: () => {},
  weatherPlace:'',
  setWeatherPlace: () => {},
  timeLocation: () => {},
  handleGetLocalTime: () => {},
  handleGetWeather: () => {},
  handleDifrentMode: () => {},
});
export default weatherContext;
