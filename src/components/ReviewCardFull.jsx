const ReviewCardFull = ({ review }) => {
  return <li key={review.title}>{`${review.title}, ${review.title}`}</li>;
};

export default ReviewCardFull;
