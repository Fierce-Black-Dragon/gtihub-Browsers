import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com",
});

API.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("profile")) {
      config.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).gitHubUser.accessToken
      }`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export const fetchRepos = (user) => API.get(`/users/${user}/repos`);
export const getRepoBranches = (user, repo) =>
  API.get(`/repos/${user}/${repo}/branches`);
export const getRepoIssues = (user, repo) =>
  API.get(`/repos/${user}/${repo}/issues`);
export const createRepo = (user, data) => API.post(`/user/repo`, data);
