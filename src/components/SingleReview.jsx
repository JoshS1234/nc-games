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

  const [changeCommentBool, setChangeCommentBool] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewWithID(review_id).then((data) => {
      setSingleReviewObj(data);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section>
        <ReviewCardFull singleReviewObj={singleReviewObj} />
        <AddComment
          review_id={review_id}
          setChangeCommentBool={setChangeCommentBool}
          changeCommentBool={changeCommentBool}
        />
        <CommentList
          review_id={review_id}
          changeCommentBool={changeCommentBool}
          setChangeCommentBool={setChangeCommentBool}
        />
      </section>
    );
  }
};
export default SingleReview;
