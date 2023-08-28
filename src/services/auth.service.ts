import { axiosUser } from "./api.service";


const loginApi = (payload: LoginPayload) => {
    return axiosUser.post("/auth/login", payload)
}
const registerApi = (payload: RegisterPayload) => {
    return axiosUser.post("/auth/register", payload)
}

export { loginApi, registerApi };