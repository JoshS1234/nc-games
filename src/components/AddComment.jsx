import { useState } from "react";
import { uploadComment } from "./API-calls";

const AddComment = ({ review_id, addCommentBool, setAddCommentBool }) => {
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState("");

  const createCommentAndUpload = (event) => {
    event.preventDefault();
    //hardcode the user here
    const commentToPost = {
      username: "jessjelly",
      body: event.target.textEntry.value,
    };

    // setAddCommentBool(!addCommentBool);
    if (commentToPost.body.length > 0) {
      setIsPosting(true);
      uploadComment(review_id, commentToPost)
        .then((data) => {
          setIsPosting(false);
          setIsError("");
          setAddCommentBool(!addCommentBool);
        })
        .catch((err) => {
          // setAddCommentBool(!addCommentBool);
          setIsPosting(false);
          setIsError(err.msg);
        });
    } else {
      setIsError("Need to input a comment");
    }
  };

  if (isPosting) {
    return <h1>Comment is posting addcomment</h1>;
  } else {
    return (
      <div>
        <h1>{isError}</h1>
        <form
          onSubmit={(event) => {
            createCommentAndUpload(event);
          }}
        >
          <label htmlFor="textEntry">Comment</label>
          <input type="text" id="textEntry" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
};
export default AddComment;
