"use client";
// import BlocksSection from "./MainPage/blocksSection/BlocksSection";
// import AboutSection from "./MainPage/aboutSection/AboutSection";
import MainSection from "./AboutPage/mainSection/MainSection";
// import SendSection from "./MainPage/sendSection/SendSection";
import FoterSection from "./AboutPage/foterSection/FoterSection";
import { useRef } from "react";

const AboutPage = () => {
  const fullpage = useRef(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    fullpage.current.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });  
  };

  return (
    <div className="fullpage__container">
      <scroll-container ref={fullpage}>
        <scroll-page id='mainSection'>
            <MainSection func={scrollToElement}/>
        </scroll-page>
        <scroll-page id='FoterSection'>
            <FoterSection func={scrollToElement}/>
        </scroll-page>
      </scroll-container>
    </div>
  )
}

export default AboutPage;