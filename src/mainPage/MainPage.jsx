"use client";
import MainSection from "./mainSection/MainSection";
import { useRef } from "react";

const MainPage = () => {
  const fullpage = useRef(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    fullpage.current.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });  
  };

  return (
    <scroll-container ref={fullpage} class="fullpage__container">
      <scroll-page id='mainSection'>
          <MainSection func={scrollToElement}/>
      </scroll-page>
      <MainSection func={scrollToElement}/>
    </scroll-container>
  )
}

export default MainPage;