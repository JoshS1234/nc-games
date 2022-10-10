const ReviewListSort = ({ sortBasedOn, setSortBasedOn, isAsc, setIsAsc }) => {
  return (
    <div id="sortOn">
      <h3>Sorting: </h3>
      <label htmlFor="sort_by">Sort by:</label>
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

      <label htmlFor="ascdesc">Order:</label>
      <select
        id="ascdesc"
        value={isAsc}
        onChange={(event) => {
          setIsAsc(event.target.value);
        }}
      >
        <option key="asc" value="asc">
          asc
        </option>
        <option key="desc" value="desc">
          desc
        </option>
      </select>
    </div>
  );
};
export default ReviewListSort;
