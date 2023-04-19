import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a download href="Yekta Ulaş KESİK .pdf" className="btn pri">
        Download My CV
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;
