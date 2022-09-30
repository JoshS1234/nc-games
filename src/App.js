import "./App.css";
import TitleBanner from "./components/TitleBanner";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import ReviewList from "./components/ReviewList";
import SingleReview from "./components/SingleReview";
import UserList from "./components/UserList";
import PageNotFound from "./components/PageNotFound";
import LoggedIn from "./components/LoggedIn";
import { Routes, Route } from "react-router";
import { useState } from "react";

import { UserContext } from "./contexts/UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className={`App__${currentUser}`}>
        <TitleBanner />
        <NavBar />
        <LoggedIn />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/review-list" element={<ReviewList />}></Route>
          <Route
            path="review-list/:review_id"
            element={<SingleReview />}
          ></Route>
          <Route path="/user-list" element={<UserList />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
