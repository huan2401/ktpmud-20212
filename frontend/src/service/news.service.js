import axiosClient from "utils/axiosClient";

const createNews = (data) => {
  return axiosClient.post("/news", {
    ...data,
  });
};

const getNewsByUser = () => {
  return axiosClient.get("/news-by-user");
};

const newsService = {
  createNews,
};

export default newsService;
