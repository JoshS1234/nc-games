import { useParams } from "react-router";
const SingleReview = () => {
  const review_id = useParams().review_id;
  console.log(review_id);

  return (
    <h1>
      The individual review router is working, this is review number:{" "}
      {review_id}
    </h1>
  );
};
export default SingleReview;
