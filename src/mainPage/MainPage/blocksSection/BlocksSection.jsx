// import "./MainSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="blocks">
      <div className="blocks__layout-button">
        <button className="blocks__ui">
          <div className="blocks__ui">
            <h2>UX/UI ДИЗАЙН</h2>
            <div className="blocks__ui-text">
              <img src="./ux-circles.svg"/>
              <a>10</a>
              <a>Кейсов на реальных пользователях</a>
            </div>
          </div>
        </button>
        <button className="blocks__tools-button">
          <div className="blocks__tools">
            <h2>Передовые инструменты обработки</h2>
            <img src="./tool-circle.svg"/>
          </div>
        </button>
        <button className="blocks__design-button">
          <div className="blocks__design">
            <img src="./design-circle.svg"/>
            <h2>Живой дизайн</h2>
            <a>9-ЛУЧШИХ</a>
            <a>инструментов для дизайна</a>
          </div>
        </button>
        <button className="blocks__more-button">
          <div className="blocks__more">
            <img src="./about-arrow.svg"/>
            <h2>Хотите узнать больше о нас?</h2>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlocksSection;