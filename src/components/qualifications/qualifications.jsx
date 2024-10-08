import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">Experience</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html">
            <h4 style={{ textAlign: "center" }}>Front End Developer</h4>
            <br />
            <p style={{ textAlign: "center" }}>
              Front-end developer in an international team. Contributing to a
              large-scale e-commerce application aimed at enhancing online
              shopping. Collaborating closely with UX/UI designers and backend
              engineers. Integrating complex functionalities seamlessly.
              Implementing interactive features to improve usability. Ensuring
              high standards of performance, accessibility, and scalability.
            </p>
          </div>
          <h1>FeatureMind</h1>

        </div>
        <div className="qualification">
          <div className="content css">
            <h4 style={{ textAlign: "center" }}>Full-Stack Web Developer</h4>
            <br />
            <p style={{ textAlign: "center" }}>
              Key member of a team developing next-generation payment systems
              Led the creation of administrative screens used nationwide.
              Developed dynamic tables and sophisticated data manipulation
              capabilities. Implemented robust role-based user authentication
              systems using tokens.
            </p>
          </div>
          <h1>Mepsan</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap">
            <h4 style={{ textAlign: "center" }}>
              Electrical & Electronics Engineering Student
            </h4>
            <br />
            <p style={{ textAlign: "center" }}>
              With preparatory class; I get a good command of English.
              Throughout my education, I constantly improved myself and bring
              friends from different cultures and sectors.
            </p>
          </div>
          <h1>CELAL BAYAR UNIVERCITY</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
