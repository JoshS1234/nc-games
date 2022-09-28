import { useState } from "react";

const ReviewListSort = () => {
  const [sortBasedOn, setSortBasedOn] = useState("Date");

  return (
    <>
      <h3 htmlFor="sort_by">Sort by: </h3>
      <select
        id="sort_by"
        value={sortBasedOn}
        onChange={(event) => {
          setSortBasedOn(event.target.value);
        }}
      >
        <option key="created_at" value="created_at">
          created_at
        </option>
        <option key="comment_count" value="comment_count">
          comment_count
        </option>
        <option key="votes" value="votes">
          votes
        </option>
      </select>
    </>
  );
};
export default ReviewListSort;
