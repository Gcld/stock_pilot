import axios from "axios";

export const apiLocal = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL: "http://192.168.13.27:8005/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        'Content-Type': 'application/json'
    }
})