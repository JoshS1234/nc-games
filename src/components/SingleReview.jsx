import { useParams } from "react-router";
import ReviewCardFull from "./ReviewCardFull";
import { getReviewWithID } from "./API-calls";
import { useEffect, useState } from "react";

const SingleReview = () => {
  const [singleReviewObj, setSingleReviewObj] = useState({});
  const review_id = useParams().review_id;

  useEffect(() => {
    getReviewWithID(review_id).then((data) => {
      console.log(data);
      setSingleReviewObj(data);
    });
  }, [review_id]);

  return (
    <section>
      <ReviewCardFull singleReviewObj={singleReviewObj} />
    </section>
  );
};
export default SingleReview;
