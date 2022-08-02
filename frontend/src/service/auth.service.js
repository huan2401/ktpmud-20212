import axiosClient from "utils/axiosClient";

const register = (
  username,
  firstname,
  lastname,
  email,
  gender,
  avatar,
  phone,
  password,
  roles
) => {
  return axiosClient.post("/auth/signup", {
    username,
    firstname,
    lastname,
    email,
    gender,
    avatar,
    phone,
    password,
    roles,
  });
};

const login = (username, password) => {
  return axiosClient.post("/auth/signin", {
    username,
    password,
  });
};

const authService = {
  register,
  login,
};

export default authService;
