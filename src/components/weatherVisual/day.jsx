import React from "react";
import { Fragment } from "react";

const Sunny = ({ handleDifrentMode, weatherPlace }) => {
  return (
    <Fragment>
      <div className="sunny">
      <div className="melt pos-melt1 "></div>
        <div className="melt pos-melt2 "></div>
        <div className="melt pos-melt3 "></div>
        <div className="melt pos-melt4 "></div>
        <div className="melt pos-melt5 "></div>
      </div>
      <div className="clouds_parent">
        {handleDifrentMode(weatherPlace.weather[0].id)}
      </div>
    </Fragment>
  );
};

export default Sunny;
