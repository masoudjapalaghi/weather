import React from "react";
import { Fragment } from "react/cjs/react.production.min";
// import { handleDifrentMode } from "./common/switchDifrentMode";

export const Moon = ({ handleDifrentMode,weatherPlace }) => {
  
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
        <div className="star pos-star6 "></div>
        <div className="star pos-star7 "></div>
        <div className="star pos-star8 "></div>
      </div>
      <div className="clouds_parent">
        {handleDifrentMode(weatherPlace.weather[0].id)}
      </div>
    </Fragment>
  );
};

export default Moon;
