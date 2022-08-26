import './Footer.css';
import fundfolio_logo from '../assets/fundfolio.png';
import twitter from '../assets/Twitter.svg';
import youtube from '../assets/YouTube.svg';
import instagram from '../assets/Instagram.svg';
import facebook from '../assets/Facebook.svg';
import breakout_uty_logo from '../assets/breakout_uty_logo.png';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__card'>
                <div className='card__child visible-mobile'>
                    <img src={breakout_uty_logo} alt="breakout_uty_logo" />
                </div>
                <div className='card__child'>
                    <img src={fundfolio_logo} alt="fundfolio" />
                </div>
                <div className='card__child'>
                    kinfra Hi-tech park
                    kalamassery, kochi
                    kerala 683503
                </div>
                <div className='card__child'>
                    <img src={youtube} alt="youtube" className='icons' />
                    <img src={instagram} alt="instagram" className='icons' />
                    <img src={twitter} alt="twitter" className='icons' />
                    <img src={facebook} alt="facebook" className='icons' />
                </div>

            </div>

            <div className='footer__card'>
                <div className='link header card__child'>
                    products
                </div>
                <div className='link card__child'>
                    marketfeed.news
                </div>
                <div className='link card__child'>
                    marketfeed.app
                </div>
                <div className='link card__child'>
                    breakout
                </div>
            </div>

            <div className='footer__card'>
                <div className='link header card__child'>
                    company
                </div>
                <div className='link card__child'>
                    about
                </div>
                <div className='link card__child'>
                    career
                </div>

            </div>

            <div className='footer__card'>
                <div className='link header card__child'>
                    more
                </div>
                <div className='link card__child'>
                    disclaimer
                </div>
                <div className='link card__child'>
                    help &amp; support
                </div>
                <div className='link card__child'>
                    privacy policy
                </div>
                <div className='link card__child'>
                    terms &amp; conditions
                </div>

            </div>
        </div>
    );
};

export default Footer;