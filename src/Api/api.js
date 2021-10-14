import axios from "axios";

const API = axios.create({
  baseURL: "https://githbrowser.herokuapp.com/",
});
export const loginIn = (code) => API.post(`/api/auth/github/${code}`);
