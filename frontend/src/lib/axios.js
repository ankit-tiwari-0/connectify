import axios from "axios"

export const axiosInstanance = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})