import "./MainSectionPhone.css";
import "./MainSectionDesctop.css"
import { useRef } from 'react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const MainSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }

  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_65bu4ib', 'template_ngttqfm', form.current, '_S-49euX4EX98nuQn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
  };

  const [isShown, setIsShown] = useState(false);
  const toggleFIeldset = () => {
      setIsShown(!isShown);
  };

  const [buttonColor, setButtonColor] = useState("linear-gradient(180deg, #606060 0%, rgba(96, 96, 96, 0.00) 100%)");

  const handleButtonClick = () => {
    setButtonColor('green');
  };

  return (
    <div className="contact">
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
                <a href="/about">О нас</a>
              </li>
              <li>
                <a href="/contacts" className="main__header-layout__navigation-home">Контакты</a>
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
      <div className="contact__main-container">
        <div className="contact__block__img">
          <img src="./moon-and-sun.svg"/>
        </div>
        <h1>Оставьте заявку!</h1>
        <div className="contact__main-container__rectangle">
          <div className="contact__main-container__rectangle-email">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form__container">
                <div className="contact__form__container-line">
                    <input type="text" placeholder="ВАШЕ ИМЯ" className="contact__form__container-name" name="from_name"/>
                    <div className="contact__form__container-radio">
                        <div>
                            <label className="contact__form__container-type">
                                <input type="radio" name="from_type" value="юр. лицо"/>
                                ЮР. ЛИЦО
                            </label>
                        </div>
                        <div>
                            <label className="contact__form__container-type">
                                <input type="radio" name="from_type" value="физ. лицо"/>
                                ФИЗ. ЛИЦО
                            </label>
                        </div>
                    </div>
                    <input type="email" placeholder="EMAIL" className="contact__form__container-email" name="from_email"/>
                    <input type="text" placeholder="ТЕЛЕФОН" className="contact__form__container-phone"name="from_phone"/>
                    <textarea placeholder="ОПИШИТЕ ПОДРОБНО ВАШИ ПОЖЕЛАНИЯ" className="contact__form__container-task" name="from_task"/>
                </div>
                <div className="contact__form__container-line">
                    <input type="submit" className="contact__form__container-send" style={{ backgroundColor: buttonColor }} onClick={handleButtonClick}/>
                </div>
              </div>
            </form>
          </div>
          <div className="contact__main-container__rectangle-text">
            <div className="contact__main-container__rectangle-text__phone">
              <a>Контакты для связи:<br/><br/>EMAIL: MP.NSK.DEV@GMAIL.COM<br/>ТЕЛЕФОН: +7(953)-795-41-21</a>
            </div>
            <div className="contact__main-container__rectangle-text__qr">
              <a>Мы в соцсетях!<br/><br/>https://t.me/mp_nsk_dev</a>
              <img src="./contact-qr.svg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;