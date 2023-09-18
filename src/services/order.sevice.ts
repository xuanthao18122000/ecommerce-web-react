import { axiosOrder, getTokenHeader } from "./api.service";

const getOrdersApi = async () => {
  return await axiosOrder.get("/orders", getTokenHeader());
};

const createOrdersApi = async (payload: ICreateOrderPayload) => {
  return await axiosOrder.post("/orders", payload, getTokenHeader());
};

export { getOrdersApi, createOrdersApi };
