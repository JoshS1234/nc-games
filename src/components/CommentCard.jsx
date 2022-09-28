const CommentCard = ({ comment }) => {
  console.log(comment);
  return (
    <div className="commentCard">
      <h4>Username: {comment.author}</h4>
      <h4>Comment: {comment.body}</h4>
      <h4>Date: {comment.created_at}</h4>
      <h4>Votes: {comment.votes}</h4>
    </div>
  );
};
export default CommentCard;
