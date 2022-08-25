import './Card.css';
import customer_review from '../assets/002-customer review 1.png';
import operator from '../assets/012-operator 1.png';
import comment from '../assets/033-comment 1.png';

const Card = () => {
    return (
        <div className='card__container'>
            <div className='cards'>
                <div className='card__header'>
                    <div>
                        <img src={operator} alt="operator" />
                    </div>

                    Virtual Campus
                    Community
                </div>
                <div>
                    The best environment to learn and interact with budding traders just like you. Trade and invest together, get expert help, or simply make new friends!
                </div>
            </div>
            <div className='cards'>
                <div className='card__header'>
                    <div>
                        <img src={customer_review} alt="customer_review" />
                    </div>

                    Practical
                    Learning
                </div>
                <div>
                    Trading cannot be mastered through just theoretical knowledge. Our students get to trade with us, drawing from the experience and expertise of professional trading mentors.
                </div>
            </div>
            <div className='cards'>

                <div className='card__header'>
                    <div>
                        <img src={comment} alt="comment" />
                    </div>
                    For Traders,
                    By Traders
                </div>
                <div>
                    With years of experience in the market, our mentors have seen it all. Whatever questions you have during your stock market journey, we will always be available to help make things right.
                </div>
            </div>
        </div>

    );
}

export default Card;