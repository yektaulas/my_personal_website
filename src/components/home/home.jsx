import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import {BsMouse} from 'react-icons/bs';

function Home() {
    return (
        <div id='home' className='container home-container'>
            <div className='logo'>
                <div className='hover-show active'>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>

                <img src={img} alt=''/>
            </div>

            <a href='#footer' className='scroll-down'>
                <hr/>
                <h5>scroll down</h5>
                <BsMouse className='scroll'/>
                <hr/>
            </a>

            <h2>
                <span>About Me</span> <br/>
                <p>
                    I am Yekta Ulaş KESİK, a 25 years old Software Engineer from İzmir. As a Software Engineer; With a
                    passion for both personal growth and software development, I keep learning new languages while
                    sharpening existing skills. Ready to apply my passion for coding to a talented engineering team to
                    develop quality solutions. I keep working on payment systems.
                </p>

            </h2>

            <Buttons/>
        </div>
    );
}

export default Home;
