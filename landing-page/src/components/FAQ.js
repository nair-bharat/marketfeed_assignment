import './FAQ.css';
import { useState } from 'react';
const FAQ = () => {

    const [showResults_Q1, setShowResults_Q1] = useState(false);
    const [showResults_Q2, setShowResults_Q2] = useState(false);
    const [showResults_Q3, setShowResults_Q3] = useState(false);
    const [showResults_Q4, setShowResults_Q4] = useState(false);
    const [showResults_Q5, setShowResults_Q5] = useState(false);
    const [showResults_Q6, setShowResults_Q6] = useState(false);
    const [showResults_Q7, setShowResults_Q7] = useState(false);

    const onClick = i => () => {
        console.log("clicked");
        var ele = document.getElementsByClassName('faq-body');
        console.log(i);
        /* console.log(showResults_Q1); */
        
        i = parseInt(i);

        if (i === 0) {
            if (!showResults_Q1) {
                ele[i].style.display = "block";
                setShowResults_Q1(true);
            }
    
            else {
                ele[i].style.display = "none";
                setShowResults_Q1(false);
            }
        }

        if (i === 1) {
            if (!showResults_Q2) {
                ele[i].style.display = "block";
                setShowResults_Q2(true);
            }
    
            else {
                ele[i].style.display = "none";
                setShowResults_Q2(false);
            }
        }

        if (i === 2) {
            if (!showResults_Q3) {
                ele[i].style.display = "block";
                setShowResults_Q3(true);
            }
    
            else {
                ele[i].style.display = "none";
                setShowResults_Q3(false);
            }
        }

        if (i === 3) {
            if (!showResults_Q4) {
                ele[i].style.display = "block";
                setShowResults_Q4(true);
            }
    
            else {
                ele[i].style.display = "none";
                setShowResults_Q4(false);
            }
        }

        if (i === 4) {
            if (!showResults_Q5) {
                ele[i].style.display = "block";
                setShowResults_Q5(true);
            }
    
            else {
                ele[i].style.display = "none";
                setShowResults_Q5(false);
            }
        }

        if (i === 5) {
            if (!showResults_Q6) {
                ele[i].style.display = "block";
                setShowResults_Q6(true);
            }
    
            else {
                ele[i].style.display = "none";
                setShowResults_Q6(false);
            }
        }

        if (i === 6) {
            if (!showResults_Q7) {
                ele[i].style.display = "block";
                setShowResults_Q7(true);
            }
    
            else {
                ele[i].style.display = "none";
                setShowResults_Q7(false);
            }
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