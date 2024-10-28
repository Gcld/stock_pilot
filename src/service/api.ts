import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.13.27:8005/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const apiLocal = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        'Content-Type': 'application/json'
    }
})