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
    <div className="design">
      <header>
        <div className="main__header-layout">
          <div className="main__header-layout__logo">
            <img src="./logo-company.svg" alt="LLC M&P NSK DEV" className="main__header-layout__logo"/>
          </div>
          <nav className="main__header-layout__navigation">
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/about">О нас</a>
              </li>
              <li>
                <a href="/portfolio">Портфолио</a>
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
            <a href="/">Главная</a>
              <a href="/about">О нас</a>
              <a href="/portfolio">Портфолио</a>
              <a href="/contacts">Контакты</a>
              <a href="/services">Услуги</a>
            </div> 
          </div>
        </div>
      </header>
      <div className="design__main-container">
        <div className="design__main-container__rectangle">
          <h1>UI / UX</h1>
          <p>Откройте для своих клиентов мир исключительного<br/>
            <a style={{color: "#0AB1E5"}}>UI/UX</a> дизайна! У нас огромный опыт в<br/>
            сфере <a style={{color: "#00FF94"}}>UI/UX</a> и мы знаем, как превзойти ожидания.</p>
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
      </div>
    </div>
  );
};

export default MainSection;