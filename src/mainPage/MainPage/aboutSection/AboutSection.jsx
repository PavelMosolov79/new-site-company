// import "./MainSectionPhone.css";
// import "./MainSectionDesctop.css"

const AboutSection = ({ func }) => {
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
              <a href="/">Home</a>
              <a href="#">О нас</a>
              <a href="#">Контакты</a>
              <a href="#">Услуги</a>
            </div> 
          </div>
        </div>
      </header>
      <div className="main__container">
        <div className="main__container-rectangle">
          <div className="main__container-text">
            <div className="main__container-text__layout">
              <a>СДЕЛАЙ ШАГ</a>
              <h1>К САЙТУ СВОЕЙ МЕЧТЫ</h1>
              <a>с нами - это легко!</a>
            </div>
            <div className="main__container-text__button-layout">
              <button className="main__container-text__button">
                <div className="main__container-text__button-background">
                  <img src="./elipse-sun-buy.svg"/>
                  <a>Заказать сейчас</a>  
                </div>
              </button>
            </div>
          </div>
          <div className="main__container-animation">
            <img id="pic1" src="./elipse-button-3.svg" className="main__container-animation__three"/>
            <img src="./elipse-button-2.svg" className="main__container-animation__two"/>
            <img id="pic2" src="./elipse-button-1.svg" className="main__container-animation__one"/>
            <button className="main__container-animation__button" onClick={changeImage}>
              <img src="./triangle-button-0.svg"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;