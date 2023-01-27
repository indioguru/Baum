import React, { useState } from "react";
import Loader from "../components/Loader";
import HomeIntro from "./HomeIntro";
import HomeTickets from "./HomeTickets";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  window.addEventListener("load", () => {
    setIsLoading(false);
  });

  return (
    <div className="home ">
      {isLoading && <Loader />}
      <video className="video" autoPlay muted loop id="myVideo">
        <source src="/assets/introbaum3.mp4" type="video/mp4" />
      </video>
      <div className="home_container containerAll">
        {!isLoading && <HomeIntro />}
        <HomeTickets />
      </div>
    </div>
  );
};

export default Home;
