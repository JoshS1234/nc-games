import { useState } from "react";
import { uploadComment } from "./API-calls";

import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const AddComment = ({ review_id, addCommentBool, setAddCommentBool }) => {
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState("");
  const { currentUser } = useContext(UserContext);

  const createCommentAndUpload = (event) => {
    event.preventDefault();
    //hardcode the user here
    const commentToPost = {
      username: currentUser.username,
      body: event.target.textEntry.value,
    };

    setIsError("");
    if (commentToPost.body.length > 0 && currentUser.username) {
      setIsPosting(true);
      uploadComment(review_id, commentToPost)
        .then((data) => {
          setIsPosting(false);
          setIsError("");
          setAddCommentBool(!addCommentBool);
        })
        .catch((err) => {
          setIsPosting(false);
          setIsError(err.msg);
        });
    } else if (commentToPost.body.length === 0) {
      setIsError("Need to input a comment");
    } else if (currentUser.username === undefined) {
      setIsError("Need to be logged in to post comments");
    } else {
      setIsError("Unknown error");
    }
  };

  if (isPosting) {
    return <h1>Comment is posting...</h1>;
  } else {
    return (
      <div className="addCommentBox">
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
