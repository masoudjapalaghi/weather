import http from "./httpService"
import config from "./config.json"
export const getLocalTime=()=>{
return http.get(`${config.localTime}?apiKey=5c64888b5307474d803b2e58c384eadc`)
}