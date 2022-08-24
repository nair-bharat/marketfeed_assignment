import './NewPrograms.css';

const NewPrograms = () => {
    return (
        <div className='program__container'>
            <div className='program__card heading'>
                Discover
                <span className='heading_display'>Our Programs</span>
            </div>
            <div className='program__card'>
                <div className='content__heading'>
                    Stock Market Basics
                </div>
                <div>
                    ₹ 9999/seat
                </div>
                <div>
                    Weekly Live
                    Raise Ticket
                    Monthly Webinars
                    Group support from us
                </div>
                <div>
                    Claim your 10% off - if you have
                    demat account through us
                </div>
                <div>
                    Check Eligibility
                </div>
                <div>
                    <button className='button__container'>
                        Book my seat
                    </button>
                </div>
            </div>
            <div className='program__card'>
                <div className='content__heading'>
                    Option Selling
                </div>
                <div>
                    ₹ 4999/seat
                </div>
                <div>
                    Live QnA
                    Raise Ticket
                    Monthly Webinars
                    Weekly Live
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