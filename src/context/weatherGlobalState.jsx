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
    const timeLocation = () => {
     const currentTime= localTime.current_time;
     var times = currentTime.slice(0, 5);
      setTime(times);
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
        timeLocation();
        handleGetWeather(localTime.location.city);
      }
    }, [localTime]);
   const handleDifrentMode = (param) => {
      switch (param) {
        case 800:
          return null;
        case 801:
          return <Cloudy position={'eighthundred_tow_tree_lighta'}/>;
        case 802:
          case 803:
          return (
            <Fragment>
              <Cloudy position={'eighthundred_tow_tree_lighta'}/>
              <Cloudy position={'eighthundred_tow_tree_lightb'}/>
            </Fragment>
          );
        case 804:
          return (
            <Fragment>
              <Cloudy position={'eighthundred_tow_tree_lighta'}/>
              <Cloudy position={'eighthundred_tow_tree_lightc'}/>
              <CloudyDark position={'eighthundred_tow_tree_darka'}/>
              <CloudyDark position={'eighthundred_tow_tree_darkb'}/>
            </Fragment>
          );
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
          return <Rainy position={'fivehundred_zero_eleven_rainy_a'}/>;
        case 520:
          return (
            <Fragment>
              <Rainy position={'fivehundred_zero_eleven_rainy_a'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_a'}/>
            </Fragment>
          );
        case 521:
          return (
            <Fragment>
              <Rainy position={'fivehundred_zero_eleven_rainy_b'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_b'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_c'}/>
            </Fragment>
          );
        case 522:
        case 531:
          return (
            <Fragment>
              <Rainy position={'fivehundred_zero_eleven_rainy_a'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_a'}/>
              <Rainy position={'fivehundred_zero_eleven_rainy_b'}/>
              <Rainy position={'fivehundred_zero_eleven_rainy_c'}/>
            </Fragment>
          );
        case 200:
          return <Stormy position={'fivehundred_zero_eleven_stormy_a'}/>;
        case 201:
        case 202:
          return (
            <Fragment>
              <Rainy position={'fivehundred_zero_eleven_rainy_b'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_b'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_c'}/>
            </Fragment>
          );
        case 210:
        case 211:
          return (
            <Fragment>
              <Stormy position={'fivehundred_zero_eleven_stormy_b'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_a'} />
            </Fragment>
          );
        case 212:
        case 221:
        case 231:
        case 232:
          return (
            <Fragment>
              <Rainy position={'fivehundred_zero_eleven_rainy_b'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_b'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_a'}/>
              <Rainy position={'fivehundred_zero_eleven_rainy_c'}/>
              <Stormy position={'fivehundred_zero_eleven_stormy_c'}/>
            </Fragment>
          );
        case 600:
        case 601:
          return <Snowy position={'fivehundred_zero_eleven_snowy_a'}/>;
        case 602:
        case 611:
        case 612:
        case 613:
          return (
            <Fragment>
              <Snowy position={'fivehundred_zero_eleven_snowy_a'}/>
              <Snowy position={'fivehundred_zero_eleven_snowy_b'}/>
            </Fragment>
          );
  
        case 615:
          return (
            <Fragment>
              <Snowy position={'fivehundred_zero_eleven_snowy_a'}/>
              <Snowy position={'fivehundred_zero_eleven_snowy_b'}/>
              <Rainy position={'fivehundred_zero_eleven_stormy_a'}/>
            </Fragment>
          );
        case 616:
        case 620:
          return (
            <Fragment>
              <Snowy position={'fivehundred_zero_eleven_snowy_a'}/>
              <Snowy position={'fivehundred_zero_eleven_snowy_b'}/>
              <Snowy position={'fivehundred_zero_eleven_snowy_c'}/>
            </Fragment>
          );
        case 621:
        case 622:
          return (
            <Fragment>
              <Snowy position={'fivehundred_zero_eleven_snowy_a'}/>
              <Snowy position={'fivehundred_zero_eleven_snowy_b'}/>
              <Snowy position={'fivehundred_zero_eleven_snowy_c'}/>
              <Snowy position={'fivehundred_zero_eleven_snowy_d'}/>
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
        timeLocation,
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
