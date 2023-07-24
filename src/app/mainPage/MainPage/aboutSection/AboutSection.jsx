import "./AboutSectionPhone.css";
import "./AboutSectionDesctop.css"

const AboutSection = ({ func }) => {
  return (
    <div className="about">
      <div className="about__company">
        <div className="about__company-header">
          <h2>Этапы работы</h2>
        </div>
        <div className="about__cmpany-layout">
          <div className="about__company-block">
            <div className="about__company-block__steps">
              <div className="about__company-block__steps-item">
                <div className="about__company-block__steps-item__flex">
                  <div className="about__company-block__steps-item__number"><a>1</a></div>
                  <div className="about__company-block__steps-item__line"></div>
                </div>
                <div className="about__company-block__steps-item__text">
                  <h2>Выбор необходимой услуги</h2>
                  <a>Вы выбираете необходимую услугу из списка услуг нашей компании.</a>
                </div>
              </div>
              <div className="about__company-block__steps-item">
                <div className="about__company-block__steps-item__flex">
                  <div className="about__company-block__steps-item__number"><a>2</a></div>
                  <div className="about__company-block__steps-item__line"></div>
                </div>
                <div className="about__company-block__steps-item__text">
                  <h2>Оформление заявки</h2>
                  <a>На этапе оформления заявки вам будет предложено заполнить контактные данные для удобной связи с исполнителем по заказу, а также техническое задание для реализации заказа и дополнительные пожелания. Оформление заявки займет не более 5 минут.</a>
                </div>
              </div>
              <div className="about__company-block__steps-item">
                <div className="about__company-block__steps-item__flex">
                  <div className="about__company-block__steps-item__number"><a>3</a></div>
                  <div className="about__company-block__steps-item__line"></div>
                </div>
                <div className="about__company-block__steps-item__text">
                  <h2>Подтверждение заявки или оплата заказа</h2>
                  <a>После создания заявки вы можете дождаться звонка от нашего оператора и оплатить заказ после консультации по телефону. Если у вас не возникнет дополнительных вопросов, оплатить заказ можно сразу: после оплаты мы моментально назначим исполнителя на заказ.</a>
                </div>
              </div>
              <div className="about__company-block__steps-item">
                <div className="about__company-block__steps-item__flex">
                  <div className="about__company-block__steps-item__number"><a>4</a></div>
                  <div className="about__company-block__steps-item__line"></div>
                </div>
                <div className="about__company-block__steps-item__text">
                  <h2>Назначение специалиста и работа над заказом</h2>
                  <a>После оплаты заказа с вами свяжется наш специалист, дополнительно обсудит все детали заказа, после чего приступит к работе.</a>
                </div>
              </div>
              <div className="about__company-block__steps-item">
                <div className="about__company-block__steps-item__flex">
                  <div className="about__company-block__steps-item__number"><a>5</a></div>
                  <div className="about__company-block__steps-item__line"></div>
                </div>
                <div className="about__company-block__steps-item__text">
                  <h2>Прием готовой работы</h2>
                  <a>После того, как разработчик покажет вам финальную версию работы по заказу (и после внесения правок по вашим пожеланиям), работа будет передана вам, и заказ будет завершен.</a>
                </div>
              </div>
              <div className="about__company-block__steps-item">
                <div className="about__company-block__steps-item__flex">
                  <div className="about__company-block__steps-item__number"><a>6</a></div>
                </div>
                <div className="about__company-block__steps-item__text">
                  <h2>Отзыв о нашей работе</h2>
                  <a>Вы сможете оценить работу специалиста и оставить отзыв о заказе.</a>
                </div>
              </div>
            </div>
          </div>
          <div className="about__company-lamp">
            <div className="about__company-lamp__block">
              <img src="./lamp.svg"/>
              <h2>МЫ ВСЕГДА НА СВЯЗИ!</h2>
              <div className="about__company-lamp__block-a">
                <a>На каждом этапе разработки Вы можете связаться с нами и получить обратную связь,
                 а так же внести поправки в проект!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__header">
        <h2>Создание сайтов на заказ от команды M&P NSK DEV</h2>
      </div>
      <div className="about__rectangle">
        

        <div className="about__rectangle-one">
          <img src="./lendind.svg"/>
          <h2>ЛЕНДИНГ</h2>
          <p>Цель лендинга — конвертировать посетителей сайта в клиентов. Вы предоставляете 
            пользователям актуальные продукты, а взамен просите контактную информацию.</p>
        </div>

        <div className="about__rectangle-two">
          <img src="./many-page.svg"/>
          <h2>МНОГОСТРАНИЧНЫЙ<br/>САЙТ</h2>
          <p>Многостраничный сайт – это ресурс, состоящий из двух и более страниц. Такие площадки, 
            как правило, легко оптимизируются, отлично продвигаются. Дизайн хорошо подходит практически 
            для любого типа проекта.</p>
        </div>

        <div className="about__rectangle-three">
          <img src="./shop.svg"/>
          <h2>ИНТЕРНЕТ-МАГАЗИН</h2>
          <p>Интернет-магазин — сайт, торгующий товарами посредством сети Интернет. Позволяет пользователям 
            онлайн, в своём браузере или через мобильное приложение, сформировать заказ на покупку, выбрать 
            способ оплаты и доставки заказа, оплатить заказ.</p>
        </div>

        <div className="about__rectangle-four">
          <img src="./legal.svg"/>
          <h2>ЮРИДИЧЕСКИЙ<br/>КАБИНЕТ</h2>
          <p>Юридический сайт – инструмент для продажи услуг. Основная его задача – показать ассортимент 
            и квалификацию специалистов. Презентовать нужно грамотно: солидный, современный дизайн, удобная 
            структура, грамотная подача материалов.</p>
        </div>

      </div>
      {/* <div className="about__sun"> */}
        {/* <img src="./sun.svg"/> */}
      {/* </div> */}
    </div>
  );
};

export default AboutSection;