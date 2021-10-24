import { isEmpty, isUndefined } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import Flag from 'react-world-flags'
import { getWeather } from "../services/weatherService";
import { getLocalTime } from "../services/localTimeService";
import Loading from "../components/common/loading";
import FormLocation from "../components/formLocation/formLocation";
import Swal from "sweetalert2";

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
                  <div className="">
                    <h1>hassan</h1>
                  </div>
                  <div className="weather_information">
                  <div className="location_cart">
                    <h1>{weatherPlace.name}</h1>
                    <Flag code={weatherPlace.sys.country} height="15" />
                  </div>
                    <div>
                      <h2>{weatherPlace.main.temp}</h2>
                      <h2>{weatherPlace.main.humidity}</h2>
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
