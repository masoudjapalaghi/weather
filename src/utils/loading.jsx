import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="weather_loading">
      <img src="/images/icons/day.svg" alt="SUN"/>
      <img src="/images/icons/night.svg" alt="MOON"/>
      <img src="/images/icons/cloudy.svg" alt="CLOUDY"/>
      <img src="/images/icons/snowy-6.svg" alt="SNOW"/>
      </div>
    </div>
  );
};

export default Loading;
