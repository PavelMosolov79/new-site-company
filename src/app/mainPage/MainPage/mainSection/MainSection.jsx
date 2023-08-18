import "./MainSectionPhone.css";
import "./MainSectionDesctop.css"
import Link from "next/link"

const MainSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="main">
      <header>
        <div className="main__header-layout">
          <div className="main__header-layout__logo">
            <img src="./logo-company.svg" alt="LLC M&P NSK DEV" className="main__header-layout__logo"/>
          </div>
          <nav className="main__header-layout__navigation">
            <ul>
              <li>
                <a href="/" className="main__header-layout__navigation-home">Главная</a>
              </li>
              <li>
                <a href="/about">О нас</a>
              </li>
              <li>
                <a href="/contacts">Контакты</a>
              </li>
              <li>
                <a href="/services">Услуги</a>
              </li>
            </ul>
          </nav>
          <div className="main__header-layout__menu">
            <button className="main__header-layout__menu-dropdown">
              <img src="./menu-bar.svg" alt="menu company"/>
            </button>
            <div className="main__header-layout__menu-dropdown__text">
              <a>Главная</a>
              <a href="/about">О нас</a>
              <a href="/contacts">Контакты</a>
              <a href="/services">Услуги</a>
            </div> 
          </div>
        </div>
      </header>
      <div className="main__container">
        <div className="main__container-rectangle">
          <div className="main__container-text">
            <div className="main__container-text__layout">
              <a>Создадим сайт</a>
              <h1>Привлекающий клиентов</h1>
              <a>Ваш успех - наша цель!</a>
              {/* <a>СДЕЛАЙ ШАГ</a> */}
              {/* <h1>К САЙТУ СВОЕЙ МЕЧТЫ</h1> */}
              {/* <a>с нами - это легко!</a> */}
            </div>
            <div className="main__container-text__button-layout">
              <div className="main__container-text__button">
                <div className="main__container-text__button-background">
                  <p>Не упусти возможность!</p> 
                  <img src="./elipse-sun-buy.svg" alt="Маленькое солнышко"/>
                  <a href="/contacts">Заказать сейчас</a>
                </div>
              </div>
            </div>
          </div>
          <div className="main__container-animation">
            <img id="pic1" src="./elipse-button-3.svg" className="main__container-animation__three" alt="Креативная студия"/>
            <img src="./elipse-button-2.svg" className="main__container-animation__two" alt="Средний круг svg"/>
            <img id="pic2" src="./elipse-button-1.svg" className="main__container-animation__one" alt="Большой круг svg"/>
            <button className="main__container-animation__button" onClick={changeImage}>
              <img src="./triangle-button-0.svg" alt="кнопка анимации"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;