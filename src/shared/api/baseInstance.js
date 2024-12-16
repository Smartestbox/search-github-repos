import axios from "axios";
export const baseInstance = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});
