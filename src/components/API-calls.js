import axios from "axios";

const api = axios.create({
  baseURL: "https://my-backend-server-josh.herokuapp.com",
});

export const getReviewList = () => {
  return api.get(`/api/reviews`);
};
