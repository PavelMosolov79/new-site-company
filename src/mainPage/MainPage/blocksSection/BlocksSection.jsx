// import "./MainSectionPhone.css";
import "./BlocksSectionDesctop.css"

const BlocksSection = ({ func }) => {
  return (
    <div className="blocks">
      <div className="blocks__layout">
        <button className="blocks__ui-button">
          <div className="blocks__ui">
            <div className="blocks__ui-h2">
              <h2>UX/UI ДИЗАЙН</h2>
            </div>
            <div className="blocks__ui-text">
              <img src="./ux-circles.svg"/>
              <div className="blocks__ui-text__a">
                <a className="blocks__ui-text__a-10">10</a>
                <a className="blocks__ui-text__a-case"><br/>Кейсов<br/> на реальных<br/> пользователях</a>
              </div>
            </div>
          </div>
        </button>
        <button className="blocks__tools-button">
          <div className="blocks__tools">
              <h2>Передовые<br/>инструменты<br/>обработки</h2>
              <img src="./tool-circle.svg"/>
          </div>
        </button>
        <button className="blocks__design-button">
          <div className="blocks__design">
            <img src="./design-circle.svg"/>
            <h2>Живой дизайн</h2>
            <a>9-ЛУЧШИХ</a>
            <p>инструментов для дизайна</p>
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