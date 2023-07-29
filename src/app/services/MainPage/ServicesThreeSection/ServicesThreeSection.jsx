import "./ServicesThreeSectionDesctop.css";
import "./ServicesThreeSectionPhone.css"
import Link from "next/link"

const ServicesThreeSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="services__three">
      <div className="services__three-rectangle">
        <div className="services__three-rectangle-h2">
          <h2>Так же мы предлагаем:</h2>
        </div>
        <div className="services__three-rectangle__another">
          <div className="services__three-rectangle__another-block">
            <div className="services__three-rectangle__another-block-h2">
              <h2>Разработку Desctop приложения</h2>
            </div>
            <div className="services__three-rectangle__another-block-img">
              <img src="./desctop-app.svg" alt="Desctop приложения"/>
            </div>
          </div>
          <div className="services__three-rectangle__another-block">
            <div className="services__three-rectangle__another-block-h2">
              <h2>Разработку Android приложения</h2>
            </div>
            <div className="services__three-rectangle__another-block-img">
              <img src="./android-app.svg" alt="Android приложения"/>
            </div>
          </div>
          <div className="services__three-rectangle__another-block">
            <div className="services__three-rectangle__another-block-h2">
              <h2>Дизайн бренда</h2>
            </div>
            <div className="services__three-rectangle__another-block-img">
              <img src="./logo-app.png" alt="Дизайн бренда"/>
            </div>
          </div>
          <div className="services__three-rectangle__another-block">
            <div className="services__three-rectangle__another-block-h2">
              <h2>Настройку и ремонт офисного оборудования</h2>
            </div>
            <div className="services__three-rectangle__another-block-img">
              <img src="./repair-app.svg" alt="Ремонт офисного оборудования"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesThreeSection;