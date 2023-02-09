import axios from "axios/index";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '1909a996-577e-417f-8ed9-b0307898e20c'
    }
})

export const instanceSocialNetwork = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '1909a996-577e-417f-8ed9-b0307898e20c'
    }
})