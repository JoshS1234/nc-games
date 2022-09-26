import { useParams } from "react-router";
import ReviewCardFull from "./ReviewCardFull";
const SingleReview = () => {
  const review_id = useParams().review_id;
  console.log(review_id);

  return (
    <section>
      <h1>
        The individual review router is working, this is review number:{" "}
        {review_id}
      </h1>
      <ReviewCardFull />
    </section>
  );
};
export default SingleReview;
