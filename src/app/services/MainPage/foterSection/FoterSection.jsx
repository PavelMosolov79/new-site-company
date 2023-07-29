import "./FoterSectionPhone.css";
import "./FoterSectionDesctop.css"

const FoterSection = ({ func }) => {

  return (
    <footer>
      <div className="foter__block">
        <div className="foter__block-href">
          <div className="foter__block-href__services">
            <h3>УСЛУГИ</h3>
            <ul>
              <li><a href="/services">Лендинг</a></li>
              <li><a href="/services">Многостраничный сайт</a></li>
              <li><a href="/services">Сайт-визитка</a></li>
              <li><a href="/services">Интернет магазин</a></li>
              <li><a href="/services">Юридический кабинет</a></li>
              <li><a href="/services">Android приложение</a></li>
              <li><a href="/services">Desctop приложение</a></li>
              <li><a href="/services">Дизайн бренда</a></li>
              <li><a href="/services">Дизайн визиток</a></li>
              <li><a href="/services">Ремонт ПК</a></li>
            </ul>
          </div>
          <div className="foter__block-href__company">
            <div>
              <h3>Компания</h3>
              <ul>
                <li><a href="/about">О компании</a></li>
                <li><a href="/about">Портфолио</a></li>
                <li><a href="/contacts">Документы</a></li>
                <li><a href="/contacts">Контакты</a></li>
              </ul>
            </div>
            <div className="foter__block-href__company-pay">
              <h3>ПРИНИМАЕМ К ОПЛАТЕ</h3>
              <div className="foter__block-href__company-pay__img">
              <img src="./payment-footer-visa.svg" alt="visa"/>
                <img src="./payment-footer-mc.svg" alt="mc"/>
                <img src="./payment-footer-mir.svg" alt="mir"/>
              </div>
            </div>
          </div>
        </div>
        <div className="foter__block-img">
          <img src="./logo-company.svg" alt="LLC M&P NSK DEV"/>
          <a>© M&P NSK DEV, 2023</a>
        </div>
      </div>
    </footer>
  );
};

export default FoterSection;