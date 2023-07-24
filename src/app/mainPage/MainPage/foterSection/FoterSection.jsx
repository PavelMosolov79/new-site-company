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
              <li><a>Лендинг</a></li>
              <li><a>Многостраничный сайт</a></li>
              <li><a>Сайт-визитка</a></li>
              <li><a>Интернет магазин</a></li>
              <li><a>Юридический кабинет</a></li>
              <li><a>Android приложение</a></li>
              <li><a>Desctop приложение</a></li>
              <li><a>Дизайн бренда</a></li>
              <li><a>Дизайн визиток</a></li>
              <li><a>Ремонт ПК</a></li>
            </ul>
          </div>
          <div className="foter__block-href__company">
            <div>
              <h3>Компания</h3>
              <ul>
                <li><a>О компании</a></li>
                <li><a>Портфолио</a></li>
                <li><a>Документы</a></li>
                <li><a>Контакты</a></li>
              </ul>
            </div>
            <div className="foter__block-href__company-pay">
              <h3>ПРИНИМАЕМ К ОПЛАТЕ</h3>
              <div className="foter__block-href__company-pay__img">
                <img src="./payment-footer-visa.svg"/>
                <img src="./payment-footer-mc.svg"/>
                <img src="./payment-footer-mir.svg"/>
              </div>
            </div>
          </div>
        </div>
        <div className="foter__block-img">
          <img src="./logo-company.svg"/>
          <a>© M&P NSK DEV, 2023</a>
        </div>
      </div>
    </footer>
  );
};

export default FoterSection;