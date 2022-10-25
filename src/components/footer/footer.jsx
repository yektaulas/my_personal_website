import "./footer.css";
import {BsMouse} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {TiSocialGithub} from "react-icons/ti";

function Footer() {
    return (
        <div id="footer" className="container footer-container">
            <h1>
                That's all{" "}
                <a href="#home">
                    <h2>
                        <BsMouse/> - scroll up -
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://www.instagram.com/yektaulas/">
                    <BsInstagram className="social"/>
                </a>
                <a href="https://www.facebook.com/ulas.kesik.5">
                    {" "}
                    <FaFacebookF className="social"/>
                </a>
                <a href="https://github.com/yektaulas">
                    <TiSocialGithub className="social"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;
