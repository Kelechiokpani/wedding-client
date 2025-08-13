import { apiConfig } from "@/lib/utils";
import axios from "axios";


export const instance = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    }
}) 

