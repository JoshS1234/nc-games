import { deleteComment } from "./API-calls";
import { useEffect, useState } from "react";

import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const CommentCard = ({ comment, deleteCommentBool, setDeleteCommentBool }) => {
  const [correctUser, setCorrectUser] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (comment.author === currentUser.username) {
      setCorrectUser(true);
    } else {
      setCorrectUser(false);
    }
  }, [comment.author, currentUser.username]);

  const deleteThisComment = (event) => {
    event.preventDefault();
    setCommentDeleted(true);
    // setErrorDeleting(false);
    deleteComment(comment.comment_id).catch((err) => {
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
