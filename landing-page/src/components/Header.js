import './Header.css';
import logo from '../assets/breakout_uty_logo.png';
import whatsapp from '../assets/wtsp_logo.png';
import hero_img_web from '../assets/hero_img_web.png';


const Header = () => {
    return (
        <div className='main__container'>
            <div className='heading__header'>
                <img src={logo} alt="logo" />
                <button><img src={whatsapp} alt="whatsapp" className='button__1'/>chat with us</button>
            </div>
            <div className='header__container'>
                <div className='header__text__container'>
                    <div className='header__heading'>
                        Digital Learning Platform
                    </div>
                    <div className='header__text1'>
                        <div className='header__text11'>World’s #1</div>
                        <div>Stock Market</div>
                        <div>University</div>
                    </div>
                    <div className="header__Text2">
                        Become a successful stock market trader and investor, learning directly from Sharique Samsudheen and his team of stock market experts!
                    </div>
                    <div className='button__container'>
                        <button className='button__join'>Join Now</button>
                    </div>
                    <div className="header__Text3">
                        Trusted by over 3000+ Traders
                    </div>
                </div>
                <div className='image__container'>
                    <img src={hero_img_web} alt="hero_img_web" className='main__image' />
                </div>
            </div>

        </div>
    );
}

export default Header;