import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import { getCommentsForReview } from "./API-calls";

const CommentList = ({
  review_id,
  addCommentBool,
  setAddCommentBool,
  deleteCommentBool,
  setDeleteCommentBool,
}) => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsForReview(review_id).then(({ comments }) => {
      console.log(addCommentBool);
      setCommentList(comments);
      setIsLoading(false);
    });
  }, [review_id, addCommentBool]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (commentList.length === 0) {
    return <h1>No comments</h1>;
  } else {
    return (
      <>
        {addCommentBool ? (
          <li key={new Date()}>
            <h2>Comment is posting</h2>
          </li>
        ) : (
          <></>
        )}
        {commentList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                comment={comment}
                deleteCommentBool={addCommentBool}
                setDeleteCommentBool={setAddCommentBool}
              />
            </li>
          );
        })}
      </>
    );
  }
};

export default CommentList;
