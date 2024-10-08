import "./home.css";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show active">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          As a detail-oriented front-end developer, I specialize in creating
          responsive, user-friendly web applications. My expertise includes
          frameworks like Next.js, API integration, and optimizing performance
          for mobile and desktop platforms. With a strong grasp of modern design
          principles and development tools, I deliver intuitive and visually
          appealing user experiences. Skilled in debugging, problem-solving, and
          collaboration, I prioritize writing clean, maintainable code while
          staying current with industry trends.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
