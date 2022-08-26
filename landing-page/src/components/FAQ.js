import './FAQ.css';
import { useState } from 'react';
const FAQ = () => {

    const [showResults, setShowResults] = useState(false);

    const onClick = i => () => {
        console.log("clicked");
        var ele = document.getElementsByClassName('faq-body');
        console.log(i);

        i = parseInt(i);

        if (!showResults) {
            ele[i].style.display = "block";
            setShowResults(true);
        }

        else {
            ele[i].style.display = "none";
            setShowResults(false);
        }


    }
    return (
        <div className='faq__container'>
            <div className="faq-heading">Frequently Asked Questions</div>
            <div className="faq-container">
                <div className="faq-one">

                    <div className="faq-page" onClick={onClick('0')}>How do I trust you? Are you even actually making profits? Isn’t this all a scam?</div>

                    <div className="faq-body">
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&amp;L statements when you join
                        the programme. What is more interesting is Sharique Samsudheen has made his P&amp;L public on social media.
                    </div>
                </div>
                {/* <hr className="hr-line"> */}
                <div className="faq-two">

                    <div className="faq-page" onClick={onClick('1')}>If you are successful in trading, then why do you need to sell courses for money?</div>

                    <div className="faq-body">
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&amp;L statements when you join
                        the programme. What is more interesting is Sharique Samsudheen has made his P&amp;L public on social media.
                    </div>
                </div>
                {/*  <hr className="hr-line"> */}
                <div className="faq-three">

                    <div className="faq-page" onClick={onClick('2')}>What is breakout university?</div>

                    <div className="faq-body">
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&amp;L statements when you join
                        the programme. What is more interesting is Sharique Samsudheen has made his P&amp;L public on social media.
                    </div>
                </div>
                {/*  <hr className="hr-line"> */}
                <div className="faq-four">

                    <div className="faq-page" onClick={onClick('3')}>How do I join the university?</div>

                    <div className="faq-body">
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&amp;L statements when you join
                        the programme. What is more interesting is Sharique Samsudheen has made his P&amp;L public on social media.
                    </div>
                </div>
                {/*  <hr className="hr-line"> */}
                <div className="faq-five">

                    <div className="faq-page" onClick={onClick('4')}>Will I get a certificate for completing the stock market trading course?</div>

                    <div className="faq-body">
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&amp;L statements when you join
                        the programme. What is more interesting is Sharique Samsudheen has made his P&amp;L public on social media.
                    </div>
                </div>
                {/*  <hr className="hr-line"> */}
                <div className="faq-six">

                    <div className="faq-page" onClick={onClick('5')}>How exactly will your stock market trading courses help me start making money?</div>

                    <div className="faq-body">
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&amp;L statements when you join
                        the programme. What is more interesting is Sharique Samsudheen has made his P&amp;L public on social media.
                    </div>
                </div>
                {/*  <hr className="hr-line"> */}
                <div className="faq-seven">

                    <div className="faq-page" onClick={onClick('6')}>What’s in it for me?</div>

                    <div className="faq-body">
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements when you join
                        the programme. What is more interesting is Sharique Samsudheen has made his P&amp;L public on social media.
                    </div>
                </div>

            </div>
        </div>

    );
};

export default FAQ;