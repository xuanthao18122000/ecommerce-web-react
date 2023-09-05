import { axiosUser } from "./api.service";


const loginApi = (payload: ILoginPayload) => {
    return axiosUser.post("/auth/login", payload)
}
const loginGoogleApi = () => {
    return axiosUser.get("/auth/login/google")
}
const loginFacebookApi = () => {
    return axiosUser.get("/auth/login/facebook")
}
const registerApi = (payload: IRegisterPayload) => {
    return axiosUser.post("/auth/register", payload)
}

export { loginApi, registerApi, loginGoogleApi, loginFacebookApi };