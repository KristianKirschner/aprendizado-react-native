import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.fxratesapi.com",
    params: {
        api_key:'APIKEY'
    }
})