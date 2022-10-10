import { useParams } from "react-router";
import ReviewCardFull from "./ReviewCardFull";
import { getReviewWithID } from "./API-calls";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const SingleReview = () => {
  const [singleReviewObj, setSingleReviewObj] = useState({});
  const review_id = useParams().review_id;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setIsError("");
    getReviewWithID(review_id)
      .then((data) => {
        setSingleReviewObj(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.msg);
      });
  }, [review_id]);

  console.log(singleReviewObj);

  if (isError) {
    return <h1>{isError}</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section>
        <ReviewCardFull singleReviewObj={singleReviewObj} />

        <CommentList review_id={review_id} />
      </section>
    );
  }
};
export default SingleReview;
