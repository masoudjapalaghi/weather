import { isEmpty } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";
import { getLocalTime } from "./../services/localTimeService";

function Weather() {
  const [place, setPlace] = useState();
  const [localTime, setLocalTime] = useState();
  const [weatherPlace, setWeatherPlace] = useState();
  const handleGetLocalTime = async () => {
    try {
      const timeLocation = await getLocalTime();
      setLocalTime(timeLocation.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetWeather = async (city) => {
    try {
      const { data } = await getWeather(city||place);
      setWeatherPlace(data);
    } catch (error) {
      console.log(error);
    }
  };

  const kelvinToCelsius = (k) => {
    return (k - 273.15).toFixed(2);
  };
  useEffect(() => {
    handleGetLocalTime();
    if(!isEmpty(localTime)){
      handleGetWeather(localTime.location.city);
    }
  }, []);
  console.log(localTime);
  console.log(weatherPlace);
 if(isEmpty(weatherPlace)){
   return <h1>LODDING...</h1>
}
  return (
  <Fragment>
      <div className="App">
        <h1>مسعود جاپلقی</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGetWeather();
          }}
          style={{ display: "flex" }}
        >
          <input
            type="text"
            style={{ border: "1px solid black" }}
            onChange={(e) => setPlace(e.target.value)}
            value={place}
          />
          <button style={{ backgroundColor: "skyblue" }}>GO</button>
        </form>
        <h2>{kelvinToCelsius(weatherPlace.main.temp)}</h2>
      </div>
    </Fragment>
  );
}

export default Weather;
