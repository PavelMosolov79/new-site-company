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
    <div className="about">
      <header>
        <div className="main__header-layout">
          <div className="main__header-layout__logo">
            <img src="./logo-company.svg" alt="LLC M&P NSK DEV" className="main__header-layout__logo"/>
          </div>
          <nav className="main__header-layout__navigation">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about" className="main__header-layout__navigation-home">О нас</a>
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
              <a href="/">Home</a>
              <a href="/about">О нас</a>
              <a href="/contacts">Контакты</a>
              <a href="/services">Услуги</a>
            </div> 
          </div>
        </div>
      </header>
      <div className="about__main-container">
        <div className="about__main-container__rectangle">
          <h1>M&P NSK DEV</h1>
          <div className="about__main-container__rectangle-block">
            <div className="about__main-container__rectangle-block-text">
              <p>Добро пожаловать в нашу молодую и динамичную компанию! Мы - команда талантливых и 
              амбициозных профессионалов, страстно увлеченных разработкой сайтов и продвижением в сети. 
              Рады представить вам нашу компанию, котороя сочетает в себе креативность, 
              передовые подходы и постоянное желание расти и развиваться.</p>
            </div>
            <div className="about__main-container__rectangle-block-img">
              <img src="./about-man.svg"/>
            </div>
          </div>
          <div className="about__main-container__rectangle-block">
            <div className="about__main-container__rectangle-block-img">
              <img src="./about-plane.svg"/>
            </div>
            <div className="about__main-container__rectangle-block-text">
              <p>Мы начали свой путь не так давно, но за это время смогли завоевать доверие и признание у наших 
              клиентов. Наша цель - помочь каждому бизнесу создать привлекательный и функиональный сайт, 
              который позволит укрепить позиции на рынке и привлечь новых клиентов.</p>
            </div>
            </div>
          <div className="about__main-container__rectangle-block">
            <div className="about__main-container__rectangle-block-text">
              <p>Основной фокус нашей компании - разработка сайтов. Мы не просто создаем веб-страницы, мы строим уникальные 
              цифровые визитки, которые отражают уникальный характер каждого бренда. Наш процесс разработки включает тесное 
              взаимодействие с клиентаом, чтобы полностью понять его потребность, цель и ценность. Это позволяет нам 
              предоставить продукты, которые не только красивы и интуитивно понятны, но и эффективны в достижении 
              поставленных задач.</p>
            </div>
            <div className="about__main-container__rectangle-block-img">
              <img src="./about-site.svg"/>
            </div>
          </div>
          <div className="about__main-container__rectangle-block">
            <div className="about__main-container__rectangle-block-img">
              <img src="./about-shipping.svg"/>
            </div>
            <div className="about__main-container__rectangle-block-text">
              <p>Кроме разработки сайтов, мы также специализируемся в сфере продвижения. Даже 
              самый красивый и функциональный сайт не сможет раскрыть свой потенциал без правильной стратегии продвижения. 
              Поэтому мы предоставляем нашим клиентам комплексные решения для успешной онлайн-рекламы, SEO-оптимизации, 
              управления контентом и аналитики.</p>
            </div>
          </div>
          <div className="about__main-container__rectangle-block">
            <div className="about__main-container__rectangle-block-text">
              <p>Мы гордимся тем, что наша компания - это не просто поставщик услуг, но и партнер, который всегда готов 
              поддержать своих клиентов на пути к успеху. Мы ценим каждого клиента и стремимся к долгосрочным отношениям, 
              основанным на взаимном доверии и успехе.</p>
            </div>
            <div className="about__main-container__rectangle-block-img">
              <img src="./about-chek.svg"/>
            </div>
          </div>
          <div className="about__main-container__rectangle-block-end">
            <div className="about__main-container__rectangle-block-text-end">
              <p>Если вы ищете надежного партнера для разработки сайтов и успешного продвижения вашего бизнеса в онлайне, 
              то наша компания - это именно то, что вам нужно! Мы готовы воплотить в жизнь ваши идеи и помочь вашему 
              бренду процветать в мире веб-технологий. Давайте вместе создадим нечто удивительное!</p>
            </div>
          </div>
        </div>
        <div className="main__container-text__button-layout">
          <div className="main__container-text__button">
            <div className="main__container-text__button-background">
              <p>Не упусти возможность!</p> 
              <img src="./elipse-sun-buy.svg"/>
              <a href="/contacts">Заказать сейчас</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;