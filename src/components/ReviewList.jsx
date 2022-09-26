import { useEffect, useState } from "react";
import { getReviewList } from "./API-calls";
import ReviewCardBrief from "./ReviewCardBrief";

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getReviewList().then((response) => {
      const reviewList = response.data.reviewList;
      console.log(reviewList);
      setReviewList(reviewList);
    });
  }, []);

  return (
    <div>
      <h1>Review List</h1>
      <ul>
        {reviewList.map((review) => {
          return <ReviewCardBrief review={review} />;
        })}
      </ul>
    </div>
  );
};
export default ReviewList;
