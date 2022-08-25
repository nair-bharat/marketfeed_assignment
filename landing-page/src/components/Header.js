import './Header.css';
import logo from '../assets/breakout_uty_logo.png';
import whatsapp from '../assets/wtsp_logo.png';
import hero_img_web from '../assets/hero_img_web.png';
import hero_img_mob from '../assets/hero_img_mob@3x.png';


const Header = () => {
    return (
        <div className='main__container'>
            <div className='heading__header'>
                <img src={logo} alt="logo" />
                <button className='chat__button hidden-mobile'><img src={whatsapp} alt="whatsapp" />chat with us</button>
                <img src={whatsapp} alt="whatsapp" className='whatsapp_mob visible-mobile' />
            </div>
            <div className='header__container'>
                <div className='header__text__container'>
                    <div className='header__heading'>
                        Digital Learning Platform
                    </div>
                    <div className='header__content'>
                        <div className='header__Text1'>World’s #1</div>
                        <div>Stock Market</div>
                        <div>University</div>
                    </div>
                    <div className="header__Text2">
                        Become a successful stock market trader and investor, learning directly from Sharique Samsudheen and his team of stock market experts!
                    </div>
                    <div className='join-button__styling'>
                        <button className='join__button__header'>Join Now</button>
                    </div>
                    <div className="header__Text3">
                        Trusted by over 3000+ Traders
                    </div>
                </div>

                <img src={hero_img_mob} alt="hero_img_mob" className='image visible-mobile' />
                <img src={hero_img_web} alt="hero_img_web" className='image_web hidden-mobile' />
            </div>

        </div>
    );
}

export default Header;