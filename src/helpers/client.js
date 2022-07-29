import axios from "axios";

const client = axios.create({
  baseURL: "https://black-market-juan-rs.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});

export default client;
