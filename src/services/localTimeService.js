import http from "./httpService";
import config from "./config.json";
import { isEmpty } from "lodash";
export const getLocalTime = (location) => {
  if (location.length===0) {
    return http.get(
      `${config.localTime}?apiKey=5c64888b5307474d803b2e58c384eadc`
    );
  } else {
    return http.get(
      `${config.localTime}?apiKey=5c64888b5307474d803b2e58c384eadc&location=${location}`
    );
  }
};
