import axios from "axios";

const api = axios.create({
  baseURL: "https://my-backend-server-josh.herokuapp.com",
});

export const getReviewList = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  let AppendUrl = ``;
  let filterCount = 0;
  for (const key in params) {
    if (params[key] !== "All") {
      if (filterCount === 0) {
        AppendUrl += `?${key}=${params[key]}`;
      } else {
        AppendUrl += `&${key}=${params[key]}`;
      }
      filterCount += 1;
    }
  }
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

export const getReviewWithID = (review_id) => {
  return api.get(`/api/reviews/${review_id}`).then(({ data }) => {
    return data.reviews;
  });
};

export const upvoteReviewWithID = (review_id) => {
  return api
    .patch(`/api/reviews/${review_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getCommentsForReview = (review_id) => {
  return api.get(`/api/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};
