import './Discord.css';
import discord_img from '../assets/join_discord_img.png';

const Discord = () => {
    return (
        <div className='discord__container'>
            <div>
                <div className='discord__header'>
                    Limited Period Offer
                </div>
                <div className='discord__message'>
                    We have everyone covered.
                    Join FREE Section
                </div>
                <div className='discord__message_Text2'>
                    There is space for everyone! Join the FREE section of our virtual campus on Discord and connect with like-minded students and stock market trading experts. Talk to us directly there and get onboarded onto the stock market world.
                </div>
                <div className='discord_button-container'>
                    <button className='join__button'> Take Me There</button>
                </div>
            </div>
            <div>
                <img src={discord_img} alt="discord_img" className='discord__img' />
            </div>

        </div>
    );
}

export default Discord;