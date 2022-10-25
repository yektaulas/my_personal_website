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
                    I am Yekta Ulaş KESİK, a 25 years old Software Engineer from İzmir. I have a special
                    interest computer sciences and programming through my education. I follow all the sector news and
                    developments in my field. I participated in courses, factory&plant tours, and some
                    electronic&programing projects to improve myself. Previously I ran my own business, therefore, I
                    have experienced customer relations and purchasing. I keep working in Mepsan as Software Engineer
                </p>
            </h2>

            <Buttons/>
        </div>
    );
}

export default Home;
