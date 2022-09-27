import { useNavigate } from "react-router-dom";

const ReviewCardBrief = ({ review }) => {
  const navigate = useNavigate();

  const redirectToFullCard = (event) => {
    event.preventDefault();
    navigate(`/review-list/${review.review_id}`);
  };

  return (
    <>
      <h3>Title: {review.title}</h3>
      <img src={review.review_img_url} alt={review.title} />
      <h4>Category: {review.category}</h4>
      <h4>Posted by: {review.owner}</h4>
      <h4>Game designer: {review.designer}</h4>
      <h4>Posted at: {review.created_at}</h4>
      <h4>Upvotes: {review.votes}</h4>
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
