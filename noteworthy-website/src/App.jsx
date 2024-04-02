//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //comment out later
import Home from "./blocks/home/Home";
import AboutUs from "./blocks/about-us/AboutUs";
import FavVideos from "./blocks/fav-videos/FavVideos";
import Members from "./blocks/members/Members";


function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <FavVideos />
      <Members />
    </>
  );
}

export default App;
