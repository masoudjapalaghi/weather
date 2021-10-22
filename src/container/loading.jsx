import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="weather_loading">
        <div className="svg">
          <svg
            version="1.1"
            id="rainclouds"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="297px"
            height="308.5px"
            viewBox="0 0 297 308.5"
            // enable-background="new 0 0 297 308.5"
            // xml:space="preserve"
          >
            <g className="weather__raindrops">
              <g className="raindrops">
                <path
                  className="weather__raindrops--1"
                  d="M165.5,171.4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.2,16.8c-2.4,4.6-0.6,10.2,4,12.5
          C157.6,177.7,163.2,176,165.5,171.4L165.5,171.4z M165.5,171.4"
                />
                <path
                  className="weather__raindrops--2"
                  d="M200,171.4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.1,16.8c-2.4,4.6-0.6,10.2,4,12.5
          C192.1,177.7,197.7,176,200,171.4L200,171.4z M200,171.4"
                />
                <path
                  className="weather__raindrops--4"
                  d="M161,209.9c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.2-19.2,16.8
          C154.6,201.9,156.4,207.5,161,209.9L161,209.9z M161,209.9"
                />
                <path
                  className="weather__raindrops--5"
                  d="M195.5,209.9c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.2-19.2,16.8
          C189.1,201.9,190.9,207.5,195.5,209.9L195.5,209.9z M195.5,209.9"
                />
                <path
                  className="weather__raindrops--7"
                  d="M103,205.9c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.1,16.8c-2.4,4.6-0.6,10.2,4,12.5
          C95.1,212.2,100.7,210.4,103,205.9L103,205.9z M103,205.9"
                />
                <path
                  className="weather__raindrops--8"
                  d="M127.6,209.9c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.2,16.8
          C121.3,201.9,123.1,207.5,127.6,209.9L127.6,209.9z M127.6,209.9"
                />
              </g>
            </g>
            <g className="weather__clouds">
              <path
                d="M88,180c0,0-31.4-6.7-31.4-36.7
              s26.7-39.9,36.5-39.9s13.3,1.6,13.3,1.6s4.4-36.9,41.2-36.9s41.5,36.4,41.4,39.8c0,3.4,0.2,4.8-0.6,9.2c0,0,5.2-1.7,12.6-1.7
              c10.8,0,30.1,8,30.1,34s-30.4,30.6-30.4,30.6H142.5z"
              />
            </g>
            <g className="weather__lightning">
              <polygon
                points="125.436,171.75 111.1,195.781 133.401,190.239 111.1,235.75 145.6,180.6 126.35,185.6 138,171.75 
            "
              />
              <polygon
                points="207.686,144.42 193.35,168.451 215.651,162.909 193.35,208.42 227.85,153.27 208.6,158.27 
            220.249,144.42 "
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
