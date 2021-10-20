import axios from 'axios'
import CONFIG from "./Config"


const apiClient = axios.create({
   
    baseURL: CONFIG.baseUrl,
    withCredentials: false,
    headers: {
        accept: "application/json",
        "Content-type": "application/json"
    }
})

export default apiClient;