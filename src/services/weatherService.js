import http from "./httpService"
import config from "./config.json"
import { trackPromise} from 'react-promise-tracker';
export const getWeather=(place)=>{
return trackPromise(http.get(`${config.openWeather}/weather?q=${place},id=524901&lang=fa&appid=238a482d3a6ec4a5bc4264002cdfff2c`))
}