import axios from 'axios'
import {AsyncStorage} from 'react-native'
import { API } from '../constants/constants'

let headers= {}
const axiosInstance = axios.create({
    baseURL: API.BASE_URL,
    headers
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default axiosInstance;
