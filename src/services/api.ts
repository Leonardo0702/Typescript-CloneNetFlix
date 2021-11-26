import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "b0279162d76eab92f3cc1c84ac365d10";

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
