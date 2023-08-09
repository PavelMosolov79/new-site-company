"use client";
// import BlocksSection from "./MainPage/blocksSection/BlocksSection";
// import AboutSection from "./MainPage/aboutSection/AboutSection";
import MainSection from "./MainPage/mainSection/MainSection";
// import SendSection from "./MainPage/sendSection/SendSection";
import FoterSection from "./MainPage/foterSection/FoterSection";
import DesignSection from "./MainPage/designSection/DesignSection";
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
        <scroll-page id='DesignSection'>
          <DesignSection func={scrollToElement}/>
        </scroll-page>
        <scroll-page id='FoterSection'>
          <FoterSection func={scrollToElement}/>
        </scroll-page>
      </scroll-container>
    </div>
  )
}

export default AboutPage;