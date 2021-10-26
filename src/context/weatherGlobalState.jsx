import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router";
import weatherContext from "./weatherContext";
import { Cloudy, CloudyDark, Mist, Rainy, Snowy, Stormy } from './../components/weatherVisual/weatherVisual';
import Swal from "sweetalert2";
import { isEmpty } from "lodash";
import { getLocalTime } from './../services/localTimeService';
import { getWeather } from './../services/weatherService';

const WeaderGlobalState = ({children}) => {
    const [place, setPlace] = useState("");
    let [time, setTime] = useState();
    const [localTime, setLocalTime] = useState();
    const [network, setNetwork] = useState("online");
    const [weatherPlace, setWeatherPlace] = useState();
    const clock = () => {
      var local = new Date();
      var hour = local.getHours();
      var minute = local.getMinutes();
      if (minute < 10) {
        minute = `0${minute}`;
      }
      setTime(`${hour}:${minute}`);
    };
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
      clock();
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
  
   const handleDifrentMode = (param) => {
      switch (param) {
        case 800:
          return null;
        case 801:
          return <Cloudy />;
        case 802:
          case 803:
          return (
            <Fragment>
              <Cloudy />
              <Cloudy />
            </Fragment>
          );
        case 804:
          return (
            <Fragment>
              <Cloudy />
              <CloudyDark />
              <CloudyDark />
              <Cloudy />
            </Fragment>
          );
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
          return <Rainy />;
        case 520:
          return (
            <Fragment>
              <Rainy />
              <Stormy />
            </Fragment>
          );
        case 521:
          return (
            <Fragment>
              <Rainy />
              <Stormy />
              <Stormy />
            </Fragment>
          );
        case 522:
        case 531:
          return (
            <Fragment>
              <Rainy />
              <Stormy />
              <Rainy />
              <Rainy />
            </Fragment>
          );
        case 200:
          return <Stormy />;
        case 201:
        case 202:
          return (
            <Fragment>
              <Rainy />
              <Stormy />
              <Stormy />
            </Fragment>
          );
        case 210:
        case 211:
          return (
            <Fragment>
              <Stormy />
              <Stormy />
            </Fragment>
          );
        case 212:
        case 221:
        case 231:
        case 232:
          return (
            <Fragment>
              <Rainy />
              <Stormy />
              <Stormy />
              <Rainy />
              <Stormy />
            </Fragment>
          );
        case 600:
        case 601:
          return <Snowy />;
        case 602:
        case 611:
        case 612:
        case 613:
          return (
            <Fragment>
              <Snowy />
              <Snowy />
            </Fragment>
          );
  
        case 615:
          return (
            <Fragment>
              <Snowy />
              <Snowy />
              <Rainy />
            </Fragment>
          );
        case 616:
        case 620:
          return (
            <Fragment>
              <Snowy />
              <Snowy />
              <Snowy />
            </Fragment>
          );
        case 621:
        case 622:
          return (
            <Fragment>
              <Snowy />
              <Snowy />
              <Snowy />
              <Snowy />
            </Fragment>
          );
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
          return <Mist />;
  
        default:
          return weatherPlace.weather[0].description;
      }
    };
  return (
    <weatherContext.Provider
      value={{
        place,
        setPlace,
        time,
        setTime,
        localTime,
        network,
        setNetwork,
        setLocalTime,
        weatherPlace,
        setWeatherPlace,
        clock,
        handleGetLocalTime,
        handleGetWeather,
        handleDifrentMode
      }}
    >
        {children}
    </weatherContext.Provider>
  );
};

export default withRouter(WeaderGlobalState);
