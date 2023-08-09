import "./DesignSectionPhone.css";
import "./DesignSectionDesctop.css"
import Link from "next/link"

const DesignSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="design-block">
      <div className="design-block__main-container__poster">
        <div className="design-block__main-container__poster-rectangle">
          <img src="./poster.png"/>
          <div className="design-block__main-container__poster-rectangle__text">
            <h2>Захватывающий дизайн</h2>
            <p>Мы создаем интуитивно понятные дизайны,<br/>
              которые делают взаимодействие ваших клиентов<br/>
              с продуктом незабываемым.</p>
            <div className="design-block__main-container__poster-rectangle__text-num">
              <div className="design-block__main-container__poster-rectangle__text-num__grid">
                <a>99+</a>
                <a>счастливых клиентов</a>
              </div>
              <div className="design-block__main-container__poster-rectangle__text-num__grid-two">
                <a>20</a>
                <a>проектов</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;