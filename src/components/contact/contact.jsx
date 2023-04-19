import "./contact.css";
import {AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";

function Contact() {
    return (
        <div id="contact" className="container contact-container">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a
                    href="https://www.linkedin.com/in/yekta-ula%C5%9F-kesik-9a2bb5186/"
                    className="contact LinkedIn"
                    target={"blank"}
                >
                    <AiOutlineLinkedin className="icon"/>
                    <h2>
                        LinkedIn <span>Yekta Ulaş Kesik</span>
                    </h2>
                </a>

                <a
                    href="https://wa.me/905427853589"
                    className="contact whatsapp"
                    target={"blank"}
                >
                    <AiOutlineWhatsApp className="icon"/>
                    <h2>
                        Whatsapp <span>+90 542 785 35 89</span>
                    </h2>
                </a>

                <a href="mailto:yekta.ulas97@gmail.com" className="contact Mail">
                    <AiOutlineMail className="icon"/>
                    <h2>E-mail
                        <span>
                           yekta.ulas97@gmail.com
                        </span>
                    </h2>
                </a>
            </div>
        </div>
    );
}

export default Contact;
