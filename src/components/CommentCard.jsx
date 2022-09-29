import { deleteComment } from "./API-calls";
import { useEffect, useState } from "react";

const CommentCard = ({ comment, changeCommentBool, setChangeCommentBool }) => {
  const [correctUser, setCorrectUser] = useState(false);

  useEffect(() => {
    if (comment.author === "tickle122") {
      setCorrectUser(true);
    } else {
      setCorrectUser(false);
    }
  }, [comment.author]);

  const deleteThisComment = (event) => {
    event.preventDefault();
    // setChangeCommentBool(true);
    deleteComment(comment.comment_id).then((data) => {
      setChangeCommentBool(!changeCommentBool);
      console.log(data);
    });
  };

  return (
    <div className="commentCard">
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
};
export default CommentCard;
