import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Cloudy, Mist, Rainy, Snowy, Stormy } from "./weatherVisual";

export const Moon = ({ weatherPlace }) => {
  const HandleDifrentMode = (param) => {
    switch (param) {
      case 800:
        return null;
      case 801:
        return <Cloudy />;
      case 802:
        return (
          <Fragment>
            <Cloudy />
            <Cloudy />
          </Fragment>
        );
      case 803:
        return (
          <Fragment>
            <Cloudy />
            <Stormy />
          </Fragment>
        );
      case 804:
        return (
          <Fragment>
            <Cloudy />
            <Stormy />
            <Stormy />
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
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 231:
      case 231:
        return <Stormy />;
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
      case 621:
      case 622:
        return (
            <Fragment>
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
    <Fragment>
      <div id="wrapper">
        <div id="nightbg"></div>
        <div className="planet"></div>
        <div className="star pos-star1 "></div>
        <div className="star pos-star2 "></div>
        <div className="star pos-star3 "></div>
        <div className="star pos-star4 "></div>
        <div className="star pos-star5 "></div>
      </div>
      <div className="clouds_parent">
        {HandleDifrentMode(weatherPlace.weather[0].id)}
      </div>
    </Fragment>
  );
};

export default Moon;
