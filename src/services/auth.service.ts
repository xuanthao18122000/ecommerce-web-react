import { axiosUser } from "./api.service";

const loginApi = async (payload: LoginPayload) => {
  return await axiosUser.post("/auth/login", payload);
};

const registerApi = async (payload: RegisterPayload) => {
  return await axiosUser.post("/auth/register", payload);
};

const logoutApi = async () => {
  const token = localStorage.getItem("token");
  return await axiosUser.post("/auth/logout", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const profileApi = async () => {
  const token = localStorage.getItem("token");
  return await axiosUser.post("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { loginApi, registerApi, logoutApi, profileApi };
