import { useEffect, useState } from "react";
import { getReviewList } from "./API-calls";
import ReviewCardBrief from "./ReviewCardBrief";

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getReviewList().then((output) => {
      setReviewList(output);
    });
  }, []);

  return (
    <div>
      <h1>Review List</h1>
      <ul>
        {reviewList.map((review) => {
          // console.log(review);
          return (
            <li key={review.review_id} className="reviewCardBrief">
              <ReviewCardBrief review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ReviewList;
