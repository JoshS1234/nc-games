import { useNavigate } from "react-router-dom";

const ReviewCardFull = ({ singleReviewObj }) => {
  const review = singleReviewObj;
  const navigate = useNavigate();

  const redirectToReviews = (event) => {
    event.preventDefault();
    navigate(`/review-list`);
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
      <h3>Title: {review.title}</h3>
      <img
        src={review.review_img_url}
        alt={review.title}
        className="fullReviewImg"
      />
      <h4>Category: {review.category}</h4>
      <h4>Review: {review.review_body}</h4>
      <h4>Posted by: {review.owner}</h4>
      <h4>Game designer: {review.designer}</h4>
      <h4>Posted at: {review.created_at}</h4>
      <h4>Upvotes: {review.votes}</h4>
    </div>
  );
};

export default ReviewCardFull;
