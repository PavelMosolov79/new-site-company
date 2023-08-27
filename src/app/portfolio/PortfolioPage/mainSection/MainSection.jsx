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
    <div className="portfolio">
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
                <a href="/portfolio" className="main__header-layout__navigation-home">Портфолио</a>
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
      <div className="portfolio__main-container">
        <div className="portfolio__main-container__rectangle">
          <h3>Сайт для строительной компании</h3>
          <div className="portfolio__main-container__rectangle-content">
            <img src="./stroycity.png" alt="stroycity-nsk"/>
            <p>В нашей компании мы имеем богатый опыт в разработке веб-сайтов для различных отраслей, 
              включая строительство. Недавно к нам обратилась строительная компания с просьбой создать 
              для них новый сайт на платформе NetCat. Этот проект оказался интересным сразу по нескольким аспектам:<br/><br/>
              1. Платформа NetCat.<br/>
              2. Адаптация под строительство.<br/>
              3. Проекты и портфолио.<br/>
              4. Оптимизация для конверсий.<br/><br/>
              После успешного завершения проекта строительная компания получила новый, современный и функциональный 
              веб-сайт, который отлично представляет их деятельность и привлекает клиентов. Заказчики выразили свою 
              положительную обратную связь относительно дизайна, удобства использования и информативности сайта.<br/><br/>
              Этот проект показал, насколько важно создавать сайты, адаптированные под специфику бизнеса заказчика, 
              и как тщательное планирование и профессиональное выполнение могут положительно сказаться на восприятии 
              компании клиентами.
            </p>
          </div>
        </div>
        <div className="portfolio__main-container__rectangle">
          <h3>Дизайн и разработка сайта для салона красоты</h3>
          <div className="portfolio__main-container__rectangle-content">
            <img src="./Venera.png" alt="venera-beauty-salon"/>
            <p>Один из интересных проектов, который мы успешно реализовали, связан с разработкой сайта для салона 
              красоты. Этот проект предоставил нам возможность продемонстрировать наши навыки в дизайне, 
              адаптированном под бьюти-индустрию, и создать уникальный и функциональный веб-ресурс.<br/>
              Интересные аспекты проекта:<br/><br/>
              1. Дизайн под индустрию красоты.<br/>
              2. Подготовка контента.<br/>
              3. Удобство использования.<br/>
              4. Оптимизация для мобильных устройств.<br/><br/>
              После успешной разработки дизайна сайта, салон красоты дал нам старт для разработки, которую мы 
              сейчас ведем. Заказчик был впечатлен дизайном, который передавал атмосферу салона, и 
              приветствовал легкость навигации по сайту.
            </p>
          </div>
        </div>
        <div className="portfolio__main-container__rectangle">
        <h3>Чат-бот для автопостинга в соц. сети из Яндекс Дзен</h3>
          <div className="portfolio__main-container__rectangle-content">
          <img src="./DzenBot.png" alt="DzenBot"/>
            <p>Один из увлекательных проектов, в котором мы успешно приняли участие, связан с разработкой 
              чат-бота для автоматического постинга контента из Яндекс.Дзена в различные социальные сети. 
              Этот проект представил интересные технические и функциональные задачи, и заказчик был полностью 
              удовлетворен результатами. Интересные аспекты проекта:<br/><br/>
              1. Интеграция с Яндекс Дзен.<br/>
              2. Множество социальных платформ.<br/>
              3. Непрерывня проверка на новые статьи.<br/><br/>
              После успешной разработки чат-бота, заказчик получил мощный инструмент для автоматического 
              постинга контента в социальные сети. Он отметил высокую эффективность и точность чат-бота в 
              отслеживании и публикации контента на различных платформах.<br/><br/>
              Этот проект подчеркнул нашу способность к разработке сложных и интегрированных систем, которые 
              эффективно автоматизируют бизнес-процессы заказчиков. Благодаря чат-боту, заказчик смог 
              сэкономить время и ресурсы, улучшить присутствие в социальных сетях и эффективно 
              взаимодействовать с аудиторией.
            </p>
          </div>
        </div>
        <div className="portfolio__main-container__rectangle-old">
        <h3>Наш старый дизайн сайта</h3>
          <div className="portfolio__main-container__rectangle-content">
          <img src="./OldDesign.png" alt="MP-NSK-DEV-old-design"/>
            <p>Этот кейс показывает, что мы не стоим на месте и всегда стараемся следовать новым тенденциям в 
              сфере It. Первый дизайн и разработка сайта стали фундаментом для нашего дальнейшего развития и 
              показывает, что даже мы всегда стараемся идти в ногу со временем.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;