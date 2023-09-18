import axios from "axios";

const axiosUser = axios.create({
  baseURL: "http://localhost:3001",
});

const axiosProduct = axios.create({
  baseURL: "http://localhost:3002",
});

const axiosPayment = axios.create({
  baseURL: "http://localhost:3003",
});

const axiosOrder = axios.create({
  baseURL: "http://localhost:3004",
});

const axiosCart = axios.create({
  baseURL: "http://localhost:3005",
});

const getTokenHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export { axiosUser, axiosProduct, axiosPayment, axiosOrder, axiosCart, getTokenHeader };