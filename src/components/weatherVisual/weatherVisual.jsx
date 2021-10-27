import React from "react";

export const Cloudy = ({position}) => {
  return <div className={`cloudy ${position}`}></div>;
};
export const CloudyDark = ({position}) => {
  return <div className={`cloudy cloud_dark ${position}`}></div>;
};
export const Rainy = ({position}) => {
  return <div className={`rainy ${position}`}></div>;
};
export const Stormy = ({position}) => {
  return <div className={`stormy ${position}`}></div>;
};
export const Snowy = ({position}) => {
  return <div className={`snowy ${position}`}></div>;
};
export const Mist = () => {
    return <div className="mist"></div>;
  };