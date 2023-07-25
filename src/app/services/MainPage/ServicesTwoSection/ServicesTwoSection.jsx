import "./ServicesTwoSectionDesctop.css";
import "./ServicesTwoSectionPhone.css"
import Link from "next/link"

const ServicesTwoSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="services__two">
      <div className="services__two-h1">
        <h2>Что входит в написание ботов?</h2>
      </div>
      <div className="services__two-rectangle">
        <div className="services__two-rectangle__multipage">
          <div className="services__two-rectangle__multipage-img">
            <img src="./bot-png-serv.png"/>
          </div>
          <div className="services__two-rectangle__multipage-text">
            <div>
              <h2>Чат-бот</h2>
              <div className="services__two-rectangle__multipage-text__a">
                <a>1. Помощь в получении API ключей от соцсетей<br/></a>
                <a>2. Подбор идеального бота под ваш запрос<br/></a>
                <a>3. Помощь с интеграцией в бизнес<br/></a>
                <a>4. Установка на сервер и настройка<br/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwoSection;