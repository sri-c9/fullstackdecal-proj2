//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //comment out later
import Home from "./blocks/home/Home";
import AboutUs from "./blocks/about-us/AboutUs";
import FavVideos from "./blocks/fav-videos/FavVideos";
import Members from "./blocks/members/Members";
import Carousel from "./blocks/about-us/Carousel";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about-us" element={<AboutUs />} />
    //     <Route path="/fav-videos" element={<FavVideos />} />
    //     <Route path="/members" element={<Members />} />
    //     <Route path="/carousel" element={<Carousel />} />
    //   </Routes>
    // </Router>
    <>
      <Home />
      <AboutUs />
      <FavVideos />
      <Members />
    </>
  );
}

export default App;
