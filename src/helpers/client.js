import axios from "axios";

import { authorizationUrls } from "constants/pathConstants";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
});

client.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem("accessToken") || false;

  if (accessToken && authorizationUrls.includes(req.url)) {
    req.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return req;
});

export default client;
