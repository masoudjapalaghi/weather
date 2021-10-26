import React from "react";
import { Fragment } from "react";

const Sunny = ({ handleDifrentMode, weatherPlace }) => {
  return (
    <Fragment>
      <div className="sunny"></div>);
      <div className="clouds_parent">
        {handleDifrentMode(weatherPlace.weather[0].id)}
      </div>
    </Fragment>
  );
};

export default Sunny;
