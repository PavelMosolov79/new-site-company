// import "./MainSectionPhone.css";
// import "./AboutSectionDesctop.css"
import "./SendSectionDesctop.css"

const SendSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="send">
      
    </div>
  );
};

export default SendSection;