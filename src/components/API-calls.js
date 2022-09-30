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

  return api
    .get(`/api/reviews${AppendUrl}`)
    .then(({ data }) => {
      return data.reviewList;
    })
    .catch((err) => {
      return Promise.reject({
        msg: "There was an error with retrieving the review list",
      });
    });
};

export const getCategoryList = () => {
  return api
    .get(`/api/categories`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject({
        msg: "There was an error with retrieving the category list",
      });
    });
};

export const getOwnerList = () => {
  return api
    .get(`/api/owners`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject({
        msg: "There was an error with retrieving the owner list",
      });
    });
};

export const getDesignerList = () => {
  return api
    .get(`/api/designers`)
    .then(({ data }) => {
      return data.designers;
    })
    .catch((err) => {
      return Promise.reject({
        msg: "There was an error with retrieving the designer list",
      });
    });
};

export const getReviewWithID = (review_id) => {
  return api
    .get(`/api/reviews/${review_id}`)
    .then(({ data }) => {
      return data.reviews;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject({
        msg: "Error 404, this review ID does not exist",
      });
    });
};

export const upvoteReviewWithID = (review_id) => {
  return api
    .patch(`/api/reviews/${review_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.reviews;
    })
    .catch((err) => {
      return Promise.reject({
        msg: "There was an error with upvoting this",
      });
    });
};

export const getCommentsForReview = (review_id) => {
  return api
    .get(`/api/reviews/${review_id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject({
        msg: "There was an error with retrieving the comments list",
      });
    });
};

export const uploadComment = (review_id, comment) => {
  return api
    .post(`/api/reviews/${review_id}/comments`, comment)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return Promise.reject({
        msg: "There was an error with uploading this comment",
      });
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/api/comments/${comment_id}`).catch((err) => {
    return Promise.reject({ msg: "There was a problem deleting this" });
  });
};

export const getUsers = () => {
  return api.get("/api/users").catch((err) => {
    return Promise.reject({
      msg: "There was an error retrieving the user data",
    });
  });
};
