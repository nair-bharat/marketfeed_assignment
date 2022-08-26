import './Sessions.css';
import image1 from '../assets/magicpattern-blob-1623813614755 1-1.png';
import image2 from '../assets/magicpattern-blob-1623813657580 1-1.png';
import image3 from '../assets/magicpattern-blob-1623813645166 1-3.png';
import image4 from '../assets/magicpattern-blob-1623813645166 1-2.png';


const Sessions = () => {
    return (

        <div>
            <div className='sessions__main hidden-mobile'>
                <div className='container__heading'>
                    We prepare you for success in your <br /><span className='section__heading'>entire stock market lifecycle</span>
                </div>

                <div className='sessions__container'>

                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 1
                        </div>
                        <div className='sessions__heading'>
                            <span className='sessions__Text'>Join</span> us from anywhere,
                            anytime
                        </div>
                        <div className='sessions__content'>
                            breakout university is easily accessible over the internet, allowing you to learn, trade and succeed wherever and whenever you want.
                        </div>
                    </div>
                    <div>
                        <img src={image1} alt="image1" className='image' />
                    </div>
                </div>


                <div className='sessions__container'>
                    <div>
                        <img src={image2} alt="image2" className='image' />
                    </div>
                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 2
                        </div>
                        <div className='sessions__heading'>
                            <span className='sessions__Text'>Learn</span> with on-demand online lessons
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
                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 3
                        </div>
                        <div className='sessions__heading'>
                            <span className='sessions__Text'>Practice</span> with live trading sessions
                            led by expert traders and advisors
                        </div>
                        <div>
                            Ever wondered how exactly people trade stocks in the real world and make money? Our live stock market trading sessions will walk you through the process and give you the confidence to make your first trade!
                        </div>
                    </div>
                    <div>
                        <img src={image3} alt="image3" className='image' />
                    </div>
                </div>


                <div className='sessions__container'>
                    <div>
                        <img src={image4} alt="image4" className='image' />
                    </div>
                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 4
                        </div>
                        <div className='sessions__heading'>
                            Losses, Experience and <span className='sessions__Text'>Profits</span>
                            #athishaktham 🚀
                        </div>
                        <div>
                            Stock market is no rocket science. Still, it won’t be a smooth journey with instant returns. It is natural to make some losses, but we make sure that you learn from them and become successful traders just like us.
                        </div>
                    </div>
                </div>

            </div>

            <div className='sessions__main visible-mobile'>
                <div className='container__heading'>
                    Get everything you need in the entire  <br /><span className='section__heading'>trade lifecycle</span>
                </div>

                <div className='sessions__container'>

                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 1
                        </div>
                        <div className='sessions__heading'>
                            <span className='sessions__Text'>Onboard</span>  new students anywhere they are
                        </div>
                        <div className='sessions__content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim metus eu felis tincidunt tristique. Etiam congue venenatis nunc et blandit.
                        </div>
                    </div>
                    <div>
                        <img src={image1} alt="image1" className='image' />
                    </div>
                </div>


                <div className='sessions__container'>

                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 2
                        </div>
                        <div className='sessions__heading'>
                            <span className='sessions__Text'>Learn</span> from online daily sessions and weekly QnA programs
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim metus eu felis tincidunt tristique. Etiam congue venenatis nunc et blandit.
                        </div>
                    </div>
                    <div>
                        <img src={image2} alt="image2" className='image' />
                    </div>
                </div>


                <div className='sessions__container'>
                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 3
                        </div>
                        <div className='sessions__heading'>
                            <span className='sessions__Text'>Practice</span> live trade sessions with experts and advisors
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim metus eu felis tincidunt tristique. Etiam congue venenatis nunc et blandit.
                        </div>
                    </div>
                    <div>
                        <img src={image3} alt="image3" className='image' />
                    </div>
                </div>


                <div className='sessions__container'>

                    <div className='sessions_child'>
                        <div className='steps'>
                            STEP 4
                        </div>
                        <div className='sessions__heading'>
                            <span className='sessions__Text'>Earn</span> from the stock market #athishaktham 🚀
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim metus eu felis tincidunt tristique. Etiam congue venenatis nunc et blandit.
                        </div>
                    </div>
                    <div>
                        <img src={image4} alt="image4" className='image' />
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Sessions;