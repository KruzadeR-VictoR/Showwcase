import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Work from "./Pages/Work/Work";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Communities from "./Pages/Communities/Communities";
import Courses from "./Pages/Courses/Courses";
import Podcasts from "./Pages/Podcasts/Podcasts";
import SucessPayment from "./Components/Payment/SucessPayment";
import Cancel from "./Components/Payment/Cancel";
// import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/explore" element={<Explore />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/podcasts" element={<Podcasts />} />

        {/* payments  */}
        <Route path="payment/successful" element={<SucessPayment />} />
        <Route path="payment/failed" element={<Cancel />} />
        {/* <Route path="/signin" element={<Login />} /> */}
        {/* <Route path="/podcasts" element={<Podcasts />} /> */}
      </Routes>
    </>
  );
}

export default App;
