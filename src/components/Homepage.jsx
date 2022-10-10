import ReviewCardHome from "./ReviewCardHome";
import { useEffect, useState } from "react";
import { getReviewList } from "./API-calls";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [maxVotesReview, setMaxVotesReview] = useState({});
  const [maxCommentsReview, setMaxCommentsReview] = useState({});
  const [randomReview, setRandomReview] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getReviewList()
      .then((data) => {
        let currMaxVotes = 0;
        let currMaxComments = 0;
        let maxVotesObj = {};
        let maxCommentsObj = {};

        let randomPos = Math.floor(Math.random() * data.length);

        for (let i = 0; i < data.length; i++) {
          if (data[i].votes > currMaxVotes) {
            maxVotesObj = data[i];
            currMaxVotes = data[i].votes;
          }
          if (data[i].comment_count > currMaxComments) {
            maxCommentsObj = data[i];
            currMaxComments = data[i].comment_count;
          }
          if (i === randomPos) {
            setRandomReview(data[i]);
          }
        }
        setMaxVotesReview(maxVotesObj);
        setMaxCommentsReview(maxCommentsObj);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(err.msg);
      });
  }, []);

  if (isError) {
    return <h1>{isError}</h1>;
  } else if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div id="hotPage">
        <h2>Most Upvoted:</h2>
        <ReviewCardHome singleReviewObj={maxVotesReview} />
        <h2>Most Commented:</h2>
        <ReviewCardHome singleReviewObj={maxCommentsReview} />
        <h2>Random Suggestion:</h2>
        <ReviewCardHome singleReviewObj={randomReview} />
      </div>
    );
  }
};
export default Homepage;
