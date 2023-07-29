import "./BlocksSectionPhone.css";
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
              <img src="./ux-circles.svg" alt="Ui/UX дизайн"/>
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
              <img src="./tool-circle.svg" alt="Передовые инструменты обработки"/>
          </div>
        </button>
        <button className="blocks__design-button">
          <div className="blocks__design">
            <img src="./design-circle.svg" alt="9-ЛУЧШИХ инструментов для дизайна"/>
            <h2>Живой дизайн</h2>
            <a>9-ЛУЧШИХ</a>
            <p>инструментов для дизайна</p>
          </div>
        </button>
        <button type="button" onClick={(e) => {e.preventDefault(); window.location.href='/about';}} className="blocks__more-button">
          <div className="blocks__more">
            <img src="./about-arrow.svg" alt="Больше о нас"/>
            <a>Хотите узнать больше о нас?</a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlocksSection;