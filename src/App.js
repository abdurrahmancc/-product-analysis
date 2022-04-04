import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import DASHBOARD from "./Components/DashBoard/DASHBOARD";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/home" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/reviews" element={<Review></Review>}>
          Reviews
        </Route>
        <Route path="/dashboard" element={<DASHBOARD></DASHBOARD>}>
          DASHBOARD{" "}
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}>
          Blogs
        </Route>
        <Route path="/about" element={<About></About>}>
          About
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
