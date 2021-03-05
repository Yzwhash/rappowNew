import axios from "axios";

const request = axios.create({
  baseURL:'http://www.xuyingdong.xyz:8080'
})

export function requestAll(config){
  return request(config)
}
