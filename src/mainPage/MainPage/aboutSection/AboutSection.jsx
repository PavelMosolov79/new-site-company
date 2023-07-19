// import "./MainSectionPhone.css";
// import "./AboutSectionDesctop.css"
import "./AboutSectionDesctop.css"

const AboutSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="about">
      {/* <div className="about__container-rectangle__after"></div> */}
      {/* <div className="about__container-rectangle__before"></div> */}
      {/* <div className="about__star"> */}
        {/* <img src="./star.svg"/> */}
      {/* </div> */}
      {/* <div className="about__cloud"> */}
        {/* <img src="./clouds.svg"/> */}
      {/* </div> */}
      {/* <div className="about__moon"> */}
        {/* <img src="./moon.svg"/> */}
      {/* </div> */}
      <div className="about__company">
        <div className="about__company-header">
          <h2>Этапы работы</h2>
        </div>
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
          <h2>Многостраничный сайт</h2>
          <p>Цель лендинга — конвертировать посетителей сайта в клиентов. Вы предоставляете 
            пользователям актуальные продукты, а взамен просите контактную информацию.</p>
        </div>
        <div className="about__rectangle-three">
          <h2>Интернет-магазин</h2>
          <p>Цель лендинга — конвертировать посетителей сайта в клиентов. Вы предоставляете 
            пользователям актуальные продукты, а взамен просите контактную информацию.</p>
        </div>
        <div className="about__rectangle-four">
          <h2>Юридический кабинет</h2>
          <p>Цель лендинга — конвертировать посетителей сайта в клиентов. Вы предоставляете 
            пользователям актуальные продукты, а взамен просите контактную информацию.</p>
        </div>
      </div>
      <div className="about__sun">
        <img src="./sun.svg"/>
      </div>
    </div>
  );
};

export default AboutSection;