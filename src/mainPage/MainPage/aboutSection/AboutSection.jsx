// import "./MainSectionPhone.css";
// import "./AboutSectionDesctop.css"
import "./AboutSectionDesctop.css"

const AboutSection = ({ func }) => {
  function changeImage() {
    var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
  }


  return (
    <div className="about">
      
    </div>
  );
};

export default AboutSection;