// import "./MainSection.css";
import "./MainSectionDesctop.css"

const MainSection = ({ func }) => {
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
                <a className="main__header-layout__navigation-home">Home</a>
              </li>
              <li>
                <a>О нас</a>
              </li>
              <li>
                <a>Контакты</a>
              </li>
              <li>
                <a>Услуги</a>
              </li>
            </ul>
          </nav>
          <div className="main__header-layout__menu">
            <button className="main__header-layout__menu-dropdown">
              <img src="./menu-bar.svg" alt="menu company"/>
            </button>
            <div className="main__header-layout__menu-dropdown__text">
              <a href="#">ссылка 1</a>
              <a href="#">ссылка 2</a>
              <a href="#">ссылка 3</a>
            </div> 
          </div>
        </div>
      </header>
      
      <div className="main_container">
        <div className="content">
          <h2 className="text">
            <p>ПРОСТОЙ ПУТЬ</p>
            <p>К САЙТУ ВАШЕЙ МЕЧТЫ</p>
          </h2>
          <p className="subtext">
            изящные и современные идеи для вашего бизнеса
          </p>
        </div>
        <div className="button-container" onClick={() => func("contactSection")}>
          <button className="button">заказать сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;