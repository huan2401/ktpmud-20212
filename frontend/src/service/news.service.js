import axiosClient from "utils/axiosClient";

const createNews = (data) => {
  return axiosClient.post("/news", {
    ...data,
  });
};

const newsService = {
  createNews,
};

export default newsService;
