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

const updateProfile = (
  username,
  firstname,
  lastname,
  email,
  gender,
  phone,
  password,
  passwordOld
) => {
  if (!!password && !!passwordOld) {
    return axiosClient.post("/auth/updateProfile", {
      username,
      firstname,
      lastname,
      email,
      gender,
      phone,
      password,
      passwordOld,
    });
  }
  return axiosClient.post("/auth/updateProfile", {
    username,
    firstname,
    lastname,
    email,
    gender,
    phone,
  });
};

const authService = {
  register,
  login,
  updateProfile,
};

export default authService;
