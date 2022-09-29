import { useState } from "react";
import { uploadComment } from "./API-calls";

const AddComment = ({ review_id, changeCommentBool, setChangeCommentBool }) => {
  const [isPosting, setIsPosting] = useState(false);

  const createCommentAndUpload = (event) => {
    event.preventDefault();
    //hardcode the user here
    const commentToPost = {
      username: "tickle122",
      body: event.target.textEntry.value,
    };

    setIsPosting(true);
    // setChangeCommentBool(true);
    uploadComment(review_id, commentToPost).then((data) => {
      console.log(data);
      setIsPosting(false);
      setChangeCommentBool(!changeCommentBool);
    });
  };

  if (isPosting) {
    return <h1>Comment is posting</h1>;
  } else {
    return (
      <div>
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
