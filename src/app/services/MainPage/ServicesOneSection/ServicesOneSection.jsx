import "./ServicesOneSectionDesctop.css";
import "./ServicesOneSectionPhone.css"
import Link from "next/link"

const ServicesOneSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="services__one">
      <div className="services__one-h1">
        <h1>Что входит в написание сайтов?</h1>
      </div>
      <div className="services__one-rectangle">
        <div className="services__one-rectangle__multipage">
          <div className="services__one-rectangle__multipage-text">
            <div>
              <h2>Лендинг</h2>
              <div className="services__one-rectangle__multipage-text__a">
                <a>1. Написание одностраничного сайта<br/></a>
                <a>2. Подключение Яндекс и Google метрики<br/></a>
                <a>3. SEO-оптимизация<br/></a>
                <a>4. Дизайн и подбор медиа на сайт</a>
              </div>
            </div>
          </div>
          <div className="services__one-rectangle__multipage-img">
            <img src="./lending-png.png" alt="Лендинг"/>
          </div>
        </div>
        <div className="services__one-rectangle__multipage">
          <div className="services__one-rectangle__multipage-img">
            <img src="./multipage-png.png" alt="Многостраничный сайт"/>
          </div>
          <div className="services__one-rectangle__multipage-text">
            <div>
              <h2>Многостраничный сайт</h2>
              <div className="services__one-rectangle__multipage-text__a">
                <a>1. Написание 5 cтраниц сайта<br/></a>
                <a>2. Подключение Яндекс и Google метрики<br/></a>
                <a>3. SEO-оптимизация всех страниц<br/></a>
                <a>4. Дизайн и подбор медиа на сайт<br/></a>
                <a>5. Продвижение через онлайн рекламу</a>
              </div>
            </div>
          </div>
        </div>
        <div className="services__one-rectangle__multipage">
          <div className="services__one-rectangle__multipage-text">
            <div>
              <h2>Сайт для мероприятий</h2>
              <div className="services__one-rectangle__multipage-text__a">
                <a>1. Написание 2-3 страничного сайта<br/></a>
                <a>2. Подключение Яндекс и Google метрики<br/></a>
                <a>3. SEO-оптимизация всех страниц<br/></a>
                <a>4. Интерактивный Дизайн и подбор медиа на сайт<br/></a>
                <a>5. Подключение платежных систем<br/></a>
                <a>6. Продвижение через онлайн рекламу</a>
              </div>
            </div>
          </div>
          <div className="services__one-rectangle__multipage-img">
            <img src="./event-png.png" alt="Сайт для мероприятий"/>
          </div>
        </div>
        <div className="services__one-rectangle__multipage">
          <div className="services__one-rectangle__multipage-img">
            <img src="./legal-png.png" alt="Юридический кабинет"/>
          </div>
          <div className="services__one-rectangle__multipage-text">
            <div>
              <h2>Юридический кабинет</h2>
              <div className="services__one-rectangle__multipage-text__a">
                <a>1. Написание 5 cтраниц сайта<br/></a>
                <a>2. Подключение Яндекс и Google метрики<br/></a>
                <a>3. SEO-оптимизация всех страниц<br/></a>
                <a>4. Строгий дизайн и подбор медиа на сайт<br/></a>
                <a>5. Продвижение через онлайн рекламу</a>
              </div>
            </div>
          </div>
        </div>
        <div className="services__one-rectangle__multipage">
          <div className="services__one-rectangle__multipage-text">
            <div>
              <h2>Интернет-магазин</h2>
              <div className="services__one-rectangle__multipage-text__a">
                <a>1. Написание продающего сайта<br/></a>
                <a>2. Подключение Яндекс и Google метрики<br/></a>
                <a>3. SEO-оптимизация всех страниц<br/></a>
                <a>4. Дизайн и подбор медиа на сайт<br/></a>
                <a>5. Подключение платежных систем<br/></a>
                <a>5. Продвижение через онлайн рекламу<br/></a>
                <a>7. Личного кабинет для сотрудников и покупателей</a>
              </div>
            </div>
          </div>
          <div className="services__one-rectangle__multipage-img">
            <img src="./shop-png.png" alt="Интернет-магазин"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOneSection;