import { isEmpty } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { trackPromise } from 'react-promise-tracker';
import { getWeather } from "../services/weatherService";
import { getLocalTime } from "../services/localTimeService";
import Loading from "../utils/loading";
import FormLocation from "../components/formLocation/formLocation";

function Weather() {
  const [place, setPlace] = useState();
  const [localTime, setLocalTime] = useState();
  const [weatherPlace, setWeatherPlace] = useState();
  const [isLoading, setLoading] = useState(true)
  const handleGetLocalTime = async () => {
    try {
      const timeLocation = await getLocalTime();
      setLocalTime(timeLocation.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetWeather = async (city) => {
    const { data,status } = await getWeather(city || place);
    try {
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
  }, [])
  useEffect(() => {
    if (!isEmpty(localTime)) {
      handleGetWeather(localTime.location.city);
    }
  }, [localTime]);
  console.log(localTime);
  console.log(weatherPlace);
  if (isEmpty(weatherPlace)) {
    return <Loading/>;
  }
  return (
    <Fragment>
      <div className="App_weather">
      <div className="weather_cart">
        {/* <h2>{kelvinToCelsius(weatherPlace.main.temp)}</h2> */}
      </div>
       <FormLocation handleGetWeather={handleGetWeather} Place={place} setPlace={setPlace}/>
      </div>
    </Fragment>
  );
}

export default Weather;
