import axios from "axios";

const axiosUser = axios.create({
  baseURL: "http://localhost:3001",
});

const axiosProduct = axios.create({
  baseURL: "http://localhost:3002",
});

export { axiosUser, axiosProduct };