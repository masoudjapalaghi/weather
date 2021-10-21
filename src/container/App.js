import React, { Fragment, useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";
import { getLocalTime } from "./../services/localTimeService";

function Weather() {
  const [place, setPlace] = useState("اراک");
  const [weatherPlace, setWeatherPlace] = useState();
  const handleGetWeather = async () => {
    try {
      // const { data } = await getWeather(place);
      const { data } = await getLocalTime(place);
      // console.log(JSON.stringify(ok))
      setWeatherPlace(data);
    } catch (error) {
      console.log(error);
    }
  };
  const kelvinToCelsius = (k) => {
    return (k - 273.15).toFixed(2);
  };
  useEffect(() => {
    handleGetWeather();
  }, []);
  console.log(weatherPlace);
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
      </div>
    </Fragment>
  );
}

export default Weather;
