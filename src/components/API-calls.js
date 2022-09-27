import axios from "axios";

const api = axios.create({
  baseURL: "https://my-backend-server-josh.herokuapp.com",
});

export const getReviewList = (AppendUrl) => {
  return api.get(`/api/reviews${AppendUrl}`).then(({ data }) => {
    return data.reviewList;
  });
};

export const getCategoryList = () => {
  return api.get(`/api/categories`).then(({ data }) => {
    return data;
  });
};

export const getOwnerList = () => {
  return api.get(`/api/owners`).then(({ data }) => {
    return data;
  });
};

export const getDesignerList = () => {
  return api.get(`/api/designers`).then(({ data }) => {
    return data.designers;
  });
};
