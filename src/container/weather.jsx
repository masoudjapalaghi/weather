import React, { Fragment, useContext } from "react";
import { isEmpty } from "lodash";
import Flag from "react-world-flags";

import FormLocation from "../components/formLocation/formLocation";
import Moon from "../components/weatherVisual/nighte";
import Sunny from "./../components/weatherVisual/day";
import weatherContext from "../context/weatherContext";

function Weather() {
  const weatherGlobalInformation = useContext(weatherContext);
  const {
    weatherPlace,
    localTime,
    time,
    handleDifrentMode,
    handleGetWeather,
    handleGetLocalTime,
    place,
    setPlace,
  } = weatherGlobalInformation;
  return (
    <Fragment>
      <div className="App_weather">
        <div className="weather_cart">
          <div className="card shadow-inset border-light ">
            <div className="card-body  shadow-soft  border-light ">
              {!isEmpty(weatherPlace) && !isEmpty(localTime) ? (
                <Fragment>
                  <div className="weather_visual">
                    {localTime.sunset <= time ? (
                      <Moon
                        handleDifrentMode={handleDifrentMode}
                        weatherPlace={weatherPlace}
                      />
                    ) : (
                      <Sunny
                        handleDifrentMode={handleDifrentMode}
                        weatherPlace={weatherPlace}
                      />
                    )}
                  </div>
                  <div className="weather_information">
                    <div className="location_cart">
                      <h1>{weatherPlace.name}</h1>
                      <Flag
                        code={weatherPlace.sys.country}
                        height="10"
                        width="18"
                      />
                    </div>
                    <h2 className="description">
                      {weatherPlace.weather[0].description}
                    </h2>
                    <div className="data_cart">
                      <span>
                        <i className="fas fa-wind"></i>
                        <h3>
                          {Math.ceil(weatherPlace.wind.speed)}
                          &#13214;
                        </h3>
                      </span>
                      <span>
                        <i className="fas fa-tint"></i>
                        <h3>
                          {weatherPlace.main.humidity}
                          &#x25;
                        </h3>
                      </span>
                      <span>
                        <i className="fas fa-thermometer-0"></i>
                        <h3>{Math.ceil(weatherPlace.main.temp)}&#176;C</h3>
                      </span>
                    </div>
                  </div>
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
        <FormLocation
          handleGetWeather={handleGetWeather}
          handleGetLocalTime={handleGetLocalTime}
          Place={place}
          setPlace={setPlace}
        />
      </div>
    </Fragment>
  );
}

export default Weather;
