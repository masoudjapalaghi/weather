import http from "./httpService"
import config from "./config.json"
export const getLocalTime=(place)=>{
    console.log(place)
return http.get(`${config.localTime}/?city=${place}&showsec=false`)
}