import './Discord.css';
import discord_img from '../assets/join_discord_img.png';
import discord_logo from '../assets/discord_logo.png';

const Discord = () => {
    return (
        <div className='discord__container'>
            <div>
                <div className='discord__header'>
                    Limited Period Offer
                </div>
                <div className='discord__message hidden-mobile'>
                    We have everyone covered.
                    Join FREE Section
                </div>
                <div className='discord__message visible-mobile'>
                    Get into our community for FREE
                </div>
                <div className='discord__message_Text2'>
                    There is space for everyone! Join the FREE section of our virtual campus on Discord and connect with like-minded students and stock market trading experts. Talk to us directly there and get onboarded onto the stock market world.
                </div>
                <div className='discord_button-container'>
                    <button className='join__button hidden-mobile'>Take Me There</button>
                    <button className='join__button visible-mobile'><img src={discord_logo} alt="discord_logo" /><span>Join Discord</span></button>
                </div>
            </div>
            <div>
                <img src={discord_img} alt="discord_img" className='discord__img' />
            </div>

        </div>
    );
}

export default Discord;