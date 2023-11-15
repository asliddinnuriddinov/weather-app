import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={7905040e322e8260fa49807c8065275a}"
})
export default instance;