import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { upvoteReviewWithID } from "./API-calls";

const ReviewCardBrief = ({ review }) => {
  const navigate = useNavigate();
  const [reviewState, setReviewState] = useState(review);
  const [isError, setIsError] = useState(false);

  const redirectToFullCard = (event) => {
    event.preventDefault();
    navigate(`/review-list/${review.review_id}`);
  };

  const upvoteFunction = (event) => {
    setIsError(false);
    event.preventDefault();
    const newReviewObj = { ...reviewState };
    newReviewObj.votes += 1;
    upvoteReviewWithID(review.review_id).catch((err) => {
      setIsError(true);
      newReviewObj.votes -= 1;
    });
    setReviewState(newReviewObj);
  };

  return (
    <>
      <h3>Title: {review.title}</h3>
      <img src={review.review_img_url} alt={review.title} />
      <h4>Category: {review.category}</h4>
      <h4>Posted by: {review.owner}</h4>
      <h4>Game designer: {review.designer}</h4>
      <h4>Posted at: {review.created_at}</h4>
      <div>
        {isError ? <h3>There was an upvote error</h3> : <></>}
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
      <button
        onClick={(event) => {
          redirectToFullCard(event);
        }}
      >
        Read full review...
      </button>
    </>
  );
};

export default ReviewCardBrief;
