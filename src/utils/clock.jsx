import React, { useEffect } from "react";

export const Clock = () => {
  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  let [time, setTime] = React.useState(now);
  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(newTime);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return time;
};
