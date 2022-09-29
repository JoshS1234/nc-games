import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { upvoteReviewWithID } from "./API-calls";

const ReviewCardFull = ({ singleReviewObj }) => {
  const [reviewState, setReviewState] = useState(singleReviewObj);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  const redirectToReviews = (event) => {
    event.preventDefault();
    navigate(`/review-list`);
  };

  const upvoteFunction = (event) => {
    setIsError(false);
    event.preventDefault();
    const newReviewObj = { ...reviewState };
    newReviewObj.votes += 1;
    upvoteReviewWithID(reviewState.review_id).catch((err) => {
      setIsError(err.msg);
      newReviewObj.votes -= 1;
    });
    setReviewState(newReviewObj);
  };

  return (
    <div className="reviewCardFull">
      <button
        onClick={(event) => {
          redirectToReviews(event);
        }}
      >
        Back to reviews...
      </button>
      <h3>Title: {reviewState.title}</h3>
      <img
        src={reviewState.review_img_url}
        alt={reviewState.title}
        className="fullReviewImg"
      />
      <h4>Category: {reviewState.category}</h4>
      <h4>Review: {reviewState.review_body}</h4>
      <h4>Posted by: {reviewState.owner}</h4>
      <h4>Game designer: {reviewState.designer}</h4>
      <h4>Comment Count: {reviewState.comment_count}</h4>
      <h4>Posted at: {reviewState.created_at}</h4>
      <div>
        {isError ? <h3>{isError}</h3> : <></>}

        <h4>
          Upvotes: {reviewState.votes}{" "}
          <button
            value={reviewState.votes}
            onClick={(event) => {
              upvoteFunction(event);
            }}
          >
            +1 upvote
          </button>
        </h4>
      </div>
    </div>
  );
};

export default ReviewCardFull;
