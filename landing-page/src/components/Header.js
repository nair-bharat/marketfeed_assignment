import './Header.css';
import logo from '../assets/breakout_uty_logo.png';
import whatsapp from '../assets/wtsp_logo.png';
import group972 from '../assets/Group 972.png';
import group8863 from '../assets/Group 886@3x-3.png';
import group8864 from '../assets/Group 886@3x-4.png';
import group8865 from '../assets/Group 886@3x-5.png';

const Header = () => {
    return (
        <div className='main__container'>
            <div className='heading__header'>
                <img src={logo} alt="logo" />
                <button><img src={whatsapp} alt="whatsapp" className='button__1'/>chat with us</button>
            </div>
            <div className='header__container'>
                <div>
                    <div>
                        Digital Learning Platform
                    </div>
                    <div className='header__text1'>
                        <div className='header__text11'>World’s #1</div>
                        <div>Stock Market</div>
                        <div>University</div>
                    </div>
                    <div>
                        Become a successful stock market trader and investor, learning directly from Sharique Samsudheen and his team of stock market experts!
                    </div>
                    <div>
                        <button className='button__join'>Join Now</button>
                    </div>
                    <div>
                        Trusted by over 3000+ Traders
                    </div>
                </div>
                <div>
                    <img src={group972} alt="group972" className='main__image' />
                    {/* <img src={group8863} alt="group8863" />
                    <img src={group8864} alt="group8864" />
                    <img src={group8865} alt="group8865" /> */}

                </div>
            </div>

        </div>
    );
}

export default Header;