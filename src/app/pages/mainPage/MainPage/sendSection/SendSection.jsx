import "./SendSectionPhone.css"
import { useRef } from 'react';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./SendSectionDesctop.css"

const SendSection = ({ func }) => {
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
    <div className="send">
      <div className="send__block">
        <div className="send__block-header">
          <h2>Оставьте заявку!</h2>
          <a>специалист свяжется с Вами</a>
        </div>
        <div className="send__block-layout">
          <div className="send__block-layout__img">
            <img src="./moon-and-sun.svg"/>
            <div className="contact__form__container-info">
              <div>EMAIL: MP.MSK.DEV@GMAIL.COM</div>
              <div>ТЕЛЕФОН: +7(995)-129-24-84</div>
            </div>
          </div>
          <div className="send__block-layout__email">
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
        </div>
      </div>
    </div>
  );
};

export default SendSection;