import './Footer.css';
import fundfolio_logo from '../assets/fundfolio.png';
import twitter from '../assets/Twitter.svg';
import youtube from '../assets/YouTube.svg';
import instagram from '../assets/Instagram.svg';
import facebook from '../assets/Facebook.svg';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div>
                <div>
                    <img src={fundfolio_logo} alt="fundfolio" />
                </div>
                <div>
                    kinfra Hi-tech park
                    kalamassery, kochi
                    kerala 683503
                </div>
                <div>
                    <img src={youtube} alt="youtube" className='icons' />
                    <img src={instagram} alt="instagram" className='icons' />
                    <img src={twitter} alt="twitter" className='icons' />
                    <img src={facebook} alt="facebook" className='icons' />
                </div>

            </div>

            <div>
                <div className='link'>
                    products
                </div>
                <div className='link'>
                    marketfeed.news
                </div>
                <div className='link'>
                    marketfeed.app
                </div>
                <div className='link'>
                    breakout
                </div>
            </div>

            <div>
                <div className='link'>
                    company
                </div>
                <div className='link'>
                    about
                </div>
                <div className='link'>
                    career
                </div>

            </div>

            <div>
                <div className='link'>
                    more
                </div>
                <div className='link'>
                    disclaimer
                </div>
                <div className='link'>
                    help &amp; support
                </div>
                <div className='link'>
                    privacy policy
                </div>
                <div className='link'>
                    terms &amp; conditions
                </div>

            </div>
        </div>
    );
};

export default Footer;