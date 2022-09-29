import { useParams } from "react-router";
import ReviewCardFull from "./ReviewCardFull";
import { getReviewWithID } from "./API-calls";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const SingleReview = () => {
  const [singleReviewObj, setSingleReviewObj] = useState({});
  const review_id = useParams().review_id;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const [addCommentBool, setAddCommentBool] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewWithID(review_id)
      .then((data) => {
        setSingleReviewObj(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.msg);
      });
  }, [addCommentBool]);

  if (isError) {
    return <h1>{isError}</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section>
        <ReviewCardFull singleReviewObj={singleReviewObj} />
        <AddComment
          review_id={review_id}
          setAddCommentBool={setAddCommentBool}
          addCommentBool={addCommentBool}
        />
        <CommentList review_id={review_id} addCommentBool={setAddCommentBool} />
      </section>
    );
  }
};
export default SingleReview;
