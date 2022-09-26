const ReviewCardBrief = ({ review }) => {
  return (
    <>
      <h3>Title: {review.title}</h3>
      <img src={review.review_img_url} alt={review.title} />
      <h4>Category: {review.category}</h4>
      <h4>Posted by: {review.owner}</h4>
      <h4>Posted at: {review.created_at}</h4>
      <h4>Upvotes: {review.votes}</h4>
    </>
  );
};

export default ReviewCardBrief;
