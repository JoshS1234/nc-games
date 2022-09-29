import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import { getCommentsForReview } from "./API-calls";

const CommentList = ({ review_id, addCommentBool }) => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCommentsForReview(review_id)
      .then(({ comments }) => {
        setCommentList(comments);
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
  } else if (commentList.length === 0) {
    return <h1>No comments</h1>;
  } else {
    return (
      <>
        {commentList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </>
    );
  }
};

export default CommentList;
