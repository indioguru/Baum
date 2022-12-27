import React from "react";
import HomeIntro from "./HomeIntro";
// import HomeLineup from "./HomeLineup";

const Home = () => {
  return (
    <div className="home ">
      <video className="video" autoPlay muted loop id="myVideo">
        <source src="/assets/introbaum3.mp4" type="video/mp4" />
      </video>
      <div className="home_container containerAll">
        <HomeIntro />
        {/* <HomeLineup /> */}
      </div>
    </div>
  );
};

export default Home;
