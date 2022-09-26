import "./App.css";
import TitleBanner from "./components/TitleBanner";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import ReviewList from "./components/ReviewList";
import SingleReview from "./components/SingleReview";
import UserList from "./components/UserList";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <TitleBanner />
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/review-list" element={<ReviewList />}></Route>
        <Route path="review-list/:review_id" element={<SingleReview />}></Route>
        <Route path="/user-list" element={<UserList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
