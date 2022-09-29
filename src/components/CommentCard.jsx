import { deleteComment } from "./API-calls";
import { useEffect, useState } from "react";

const CommentCard = ({ comment, addCommentBool, setAddCommentBool }) => {
  const [correctUser, setCorrectUser] = useState(false);

  useEffect(() => {
    if (comment.author === "tickle122") {
      setCorrectUser(true);
    } else {
      setCorrectUser(false);
    }
  }, [comment.author]);

  // const deleteThisComment = (event) => {
  //   setChangeCommentBool(true);
  //   event.preventDefault();
  //   deleteComment(comment.comment_id).then((data) => {
  //     setChangeCommentBool(false);
  //   });
  // };

  return (
    <div className="commentCard">
      <h4>Username: {comment.author}</h4>
      <h4>Comment: {comment.body}</h4>
      <h4>Date: {comment.created_at}</h4>
      <h4>Votes: {comment.votes}</h4>

      {correctUser ? (
        <button
        // onClick={(event) => {
        //   deleteThisComment(event);
        // }}
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
