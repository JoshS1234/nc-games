import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import { getCommentsForReview } from "./API-calls";
import AddComment from "./AddComment";

const CommentList = ({ review_id }) => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [addCommentBool, setAddCommentBool] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError("");
    getCommentsForReview(review_id)
      .then(({ comments }) => {
        setCommentList(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.msg);
      });
  }, [review_id, addCommentBool]);

  if (isError) {
    return <h1>{isError}</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (commentList.length === 0) {
    return (
      <div>
        <AddComment
          review_id={review_id}
          setAddCommentBool={setAddCommentBool}
          addCommentBool={addCommentBool}
        />
        <h1>No comments</h1>;
      </div>
    );
  } else {
    return (
      <>
        <AddComment
          review_id={review_id}
          setAddCommentBool={setAddCommentBool}
          addCommentBool={addCommentBool}
        />
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
