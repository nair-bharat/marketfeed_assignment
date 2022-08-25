import './NewPrograms.css';

const NewPrograms = () => {
    return (
        <div className='program__container'>
            <div className='program__card_header heading'>
                Discover
                <div>
                    <span className='heading_display'>Our Programs</span>
                </div>
            </div>
            <div className='program__card'>
                <div className='content__heading content__padding'>
                    Stock Market Basics
                </div>
                <div /* className='content__padding' */>
                    ₹ 9999/seat
                </div>
                <div /* className='content__padding' */>
                    Weekly Live
                </div>
                <div /* className='content__padding' */>
                    Raise Ticket
                </div>
                <div /* className='content__padding' */>
                    Monthly Webinars
                </div>
                <div/*  className='content__padding' */>
                    Group support from us
                </div>
                <div /* className='offer_card' */>
                    <div>
                        Claim your 10% off - if you have
                        demat account through us
                    </div>
                    <div>
                        Check Eligibility
                    </div>
                </div>
                <div>
                    <button className='button__container'>
                        Book my seat
                    </button>
                </div>
            </div>
            <div className='program__card'>
                <div className='content__heading content__padding'>
                    Option Selling
                </div>
                <div className='content__padding'>
                    ₹ 4999/seat
                </div>
                <div className='content__padding'>
                    Live QnA
                </div>
                <div className='content__padding'>
                    Raise Ticket
                </div>
                <div className='content__padding'>
                    Monthly Webinars
                </div>
                <div className='content__padding'>
                    Weekly Live
                </div>
                <div className='content__padding'>
                    Group support from us
                </div>
                <div>
                    <button className='button__container'>
                        Book my seat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewPrograms;