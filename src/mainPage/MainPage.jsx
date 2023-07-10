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
    <div class="fullpage__container">
      <scroll-container ref={fullpage}>
        <scroll-page id='mainSection'>
            <MainSection func={scrollToElement}/>
        </scroll-page>
        {/* <MainSection func={scrollToElement}/> */}
      </scroll-container>
    </div>
  )
}

export default MainPage;