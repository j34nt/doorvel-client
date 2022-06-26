import axios from 'axios';

export const doorvelApi = axios.create({
    baseURL: 'http://54.177.198.128:8001/api/'
})