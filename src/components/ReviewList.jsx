import { useEffect, useState } from "react";
import {
  getCategoryList,
  getOwnerList,
  getDesignerList,
  getReviewList,
} from "./API-calls";
import ReviewCardBrief from "./ReviewCardBrief";
import { useNavigate, useSearchParams } from "react-router-dom";

const ReviewList = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [reviewList, setReviewList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [ownerList, setOwnerList] = useState([]);
  const [designerList, setDesignerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filterObj, setFilterObj] = useState({
    category: "All",
    owner: "All",
    designer: "All",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    getCategoryList()
      .then((output) => {
        output = output.map((category) => {
          return category.slug;
        });
        setCategoryList(["All", ...output]);
        return getOwnerList();
      })
      .then((output) => {
        setOwnerList(["All", ...output]);
        return getDesignerList();
      })
      .then((output) => {
        setDesignerList(["All", ...output]);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getReviewList().then((output) => {
      setReviewList(output);
      setIsLoading(false);
    });
  }, [filterObj, searchParams, navigate]);

  const formSubmitFunction = (event) => {
    event.preventDefault();
    let params = {
      category: event.target.categoryFilter.value,
      owner: event.target.ownerFilter.value,
      designer: event.target.designerFilter.value,
    };
    setSearchParams(params);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>Review List</h1>
        <form
          onSubmit={(event) => {
            formSubmitFunction(event);
          }}
        >
          <label htmlFor="categoryFilter">Categories</label>
          <select
            id="categoryFilter"
            value={filterObj.category}
            onChange={(event) => {
              const newFilterObj = { ...filterObj };
              newFilterObj.category = event.target.value;
              setFilterObj(newFilterObj);
            }}
          >
            {categoryList.map((category) => {
              return <option key={category}>{category}</option>;
            })}
          </select>

          <label htmlFor="ownerFilter">Posted by</label>
          <select
            id="ownerFilter"
            value={filterObj.owner}
            onChange={(event) => {
              const newFilterObj = { ...filterObj };
              newFilterObj.owner = event.target.value;
              setFilterObj(newFilterObj);
            }}
          >
            {ownerList.map((owner) => {
              return <option key={owner}>{owner}</option>;
            })}
          </select>

          <label htmlFor="designerFilter">Designer</label>
          <select
            id="designerFilter"
            value={filterObj.designer}
            onChange={(event) => {
              const newFilterObj = { ...filterObj };
              newFilterObj.designer = event.target.value;
              setFilterObj(newFilterObj);
            }}
          >
            {designerList.map((designer) => {
              return <option key={designer}>{designer}</option>;
            })}
          </select>
          <button>Submit</button>
        </form>

        {reviewList.length === 0 ? (
          <h1>No results found!</h1>
        ) : (
          <ul>
            {reviewList.map((review) => {
              return (
                <li key={review.review_id} className="reviewCardBrief">
                  <ReviewCardBrief review={review} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
};
export default ReviewList;
