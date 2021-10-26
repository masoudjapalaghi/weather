import React, { Fragment, useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Flag from "react-world-flags";
import { getWeather } from "../services/weatherService";
import { getLocalTime } from "../services/localTimeService";
import FormLocation from "../components/formLocation/formLocation";
import Swal from "sweetalert2";
import { Clock } from "./../utils/clock";
import Moon from "../components/weatherVisual/nighte";
import Sunny from './../components/weatherVisual/day';
import { Stormy } from "../components/weatherVisual/weatherVisual";

function Weather() {
  const [place, setPlace] = useState("");
  const [localTime, setLocalTime] = useState();
  const [network, setNetwork] = useState("online");
  const [weatherPlace, setWeatherPlace] = useState();
  const [isLoading, setLoading] = useState(true);

  const handleGetLocalTime = async () => {
    if (network === "online") {
      try {
        const { data } = await getLocalTime(place);
        setLocalTime(data);
      } catch (error) {
        console.log(error);
        if (error) {
          setNetwork("offline");
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "شما به شبکه متصل نیستید؟!؟",
        footer: "<small>.اتصال اینترنت خود را چک کنید</small>",
      });
    }
  };
  const handleGetWeather = async (city) => {
    if (network === "online") {
      try {
        const { data } = await getWeather(city || place);
        setWeatherPlace(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "شما به شبکه متصل نیستید؟!؟",
        footer: "<small>.اتصال اینترنت خود را چک کنید</small>",
      });
    }
  };

  useEffect(() => {
    handleGetLocalTime();
    window.addEventListener("offline", function (e) {
      setNetwork("offline");
    });
    window.addEventListener("online", function (e) {
      setNetwork("online");
    });
  }, []);
  useEffect(() => {
    if (!isEmpty(localTime)) {
      handleGetWeather(localTime.location.city);
    }
  }, [localTime]);
  console.log(network);
  console.log(localTime);
  console.log(weatherPlace);
  return (
    <Fragment>
      <div className="App_weather">
        <div className="weather_cart">
          <div className="card shadow-inset border-light ">
            <div className="card-body  shadow-soft  border-light ">
              {!isEmpty(weatherPlace) && !isEmpty(localTime) ? (
                <Fragment>
                  <div className="weather_visual">
                    {localTime.sunset<=<Clock/>?<Moon weatherPlace={weatherPlace}/>:<Sunny/>}
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
