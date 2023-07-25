"use client";
import MainSection from "./MainPage/mainSection/MainSection";
import FoterSection from "./MainPage/foterSection/FoterSection";
import ServicesOneSection from "./MainPage/ServicesOneSection/ServicesOneSection";
import ServicesTwoSection from "./MainPage/ServicesTwoSection/ServicesTwoSection";
import ServicesThreeSection from "./MainPage/ServicesThreeSection/ServicesThreeSection";

import { useRef } from "react";

const ServicesPage = () => {
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
        <scroll-page id='ServicesOneSection'>
            <ServicesOneSection func={scrollToElement}/>
        </scroll-page>
        <scroll-page id='ServicesTwoSection'>
            <ServicesTwoSection func={scrollToElement}/>
        </scroll-page>
        <scroll-page id='ServicesThreeSection'>
            <ServicesThreeSection func={scrollToElement}/>
        </scroll-page>
        <scroll-page id='FoterSection'>
            <FoterSection func={scrollToElement}/>
        </scroll-page>
      </scroll-container>
    </div>
  )
}

export default ServicesPage;