import { deleteComment } from "./API-calls";
import { useEffect, useState } from "react";

const CommentCard = ({ comment, deleteCommentBool, setDeleteCommentBool }) => {
  const [correctUser, setCorrectUser] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(false);

  useEffect(() => {
    if (comment.author === "jessjelly") {
      setCorrectUser(true);
    } else {
      setCorrectUser(false);
    }
  }, [comment.author]);

  const deleteThisComment = (event) => {
    event.preventDefault();
    setCommentDeleted(true);
    deleteComment(comment.comment_id)
      .then((data) => {})
      .catch((err) => {
        setCommentDeleted(false);
        setErrorDeleting(true);
      });
  };

  if (commentDeleted && !errorDeleting) {
    return <></>;
  } else {
    return (
      <div className="commentCard">
        {errorDeleting ? <h3>There was an error deleting this</h3> : <></>}
        <h4>Username: {comment.author}</h4>
        <h4>Comment: {comment.body}</h4>
        <h4>Date: {comment.created_at}</h4>
        <h4>Votes: {comment.votes}</h4>

        {correctUser ? (
          <button
            onClick={(event) => {
              deleteThisComment(event);
            }}
          >
            Delete
          </button>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
};
export default CommentCard;
