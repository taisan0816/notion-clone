import axiosClient from "./axiosClient";

const authApi = {
    register: (params) => axiosClient.post("auth/register", params)
    //login: (params) =>
};

export default authApi