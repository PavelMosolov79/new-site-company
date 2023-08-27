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
    <div className="services">
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
                <a href="/services" className="main__header-layout__navigation-home">Услуги</a>
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
      <div className="services__main-container">
        <div className="services__main-container__rectangle">
          <div className="services__main-container__rectangle-bot">
            <div className="services__main-container__rectangle-bot-h2">
              <h2>Чат-боты</h2>
            </div>
            <div className="services__main-container__rectangle-bot-ul">
              <ul>
                <li>- Ведение бизнес аккаунтов</li>
                <li>- Автоматический ответа клиентам</li>
                <li>- Получение данных из соцсетей</li>
                <li>- Автопостинг в соцсети</li>
                <li>- Работа с искусственным интелектом</li>
                <li>И многое другое!</li>
              </ul>
            </div>
            <img src="./bot-png.png" alt="bots"/>
          </div>
          <div className="services__main-container__rectangle-site">
            <div className="services__main-container__rectangle-site-h2">
              <h2>Сайты</h2>
            </div>
            <div className="services__main-container__rectangle-site-ul">
              <ul>
                <li>- Малому бизнесу</li>
                <li>- Крупным компаниям</li>
                <li>- Сайты для мероприятий</li>
                <li>- Индивидуальным предпринимателям</li>
                <li>И всем, кто хочет привлечь новый поток клиентов</li>
              </ul>
            </div>
            <img src="./site-png.png" alt="sites"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;