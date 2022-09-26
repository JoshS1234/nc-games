import axios from "axios";

const BaseURL = "https://my-backend-server-josh.herokuapp.com/api";

export const getReviewList = () => {
  return axios.get(BaseURL + `/reviews`);
};
