import './Sessions.css';
import image1 from '../assets/magicpattern-blob-1623813614755 1-1.png';
import image2 from '../assets/magicpattern-blob-1623813657580 1-1.png';
import image3 from '../assets/magicpattern-blob-1623813645166 1-3.png';
import image4 from '../assets/magicpattern-blob-1623813645166 1-2.png';


const Sessions = () => {
    return (
        <div>
            <div>
                We prepare you for success in your
                <span className='section__heading'>entire stock market lifecycle</span>
            </div>
            <div className='sessions__container'>

                <div>
                    <div>
                        STEP 1
                    </div>
                    <div>
                        Join us from anywhere,
                        anytime
                    </div>
                    <div>
                        breakout university is easily accessible
                        over the internet, allowing you to learn,
                        trade and succeed wherever and whenever
                        you want.
                    </div>
                </div>
                <div>
                    <img src={image1} alt="image1" />
                </div>
            </div>


            <div className='sessions__container'>
                <div>
                    <img src={image2} alt="image2" />
                </div>
                <div>
                    <div>
                        STEP 2
                    </div>
                    <div>
                        Learn with on-demand online lessons
                        and daily interactive Q&amp;A sessions
                    </div>
                    <div>
                        Get unrestricted access to our expert-led daily sessions and interactive Q&amp;A programs. Our all-inclusive and engaging
                        online stock trading courses are designed to help you grasp
                        all fundamental concepts and get you ready to make profitable market moves.
                    </div>
                </div>
            </div>


            <div className='sessions__container'>
                <div>
                    <div>
                        STEP 3
                    </div>
                    <div>
                        Practice with live trading sessions
                        led by expert traders and advisors
                    </div>
                    <div>
                        Ever wondered how exactly people trade stocks in the real world and make money? Our live stock market trading sessions will walk you through the process and give you the confidence to make your first trade!
                    </div>
                </div>
                <div>
                    <img src={image3} alt="image3" />
                </div>
            </div>


            <div className='sessions__container'>
                <div>
                    <img src={image4} alt="image4" />
                </div>
                <div>
                    <div>
                        STEP 4
                    </div>
                    <div>
                        Losses, Experience and Profits
                        #athishaktham 🚀
                    </div>
                    <div>
                        Stock market is no rocket science. Still, it won’t be a smooth journey with instant returns. It is natural to make some losses, but we make sure that you learn from them and become successful traders just like us.
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Sessions;