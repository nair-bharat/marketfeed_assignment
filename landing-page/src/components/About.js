import './About.css';

const About = () => {
    return (
        <div className='about__container'>
            <div className='about__header'>
                About
                <span className='about__header__1'>
                    Breakout University
                </span>

            </div>
            <div className='about__content'>
                <div>
                    breakout university is an online stock market learning platform on a mission to democratize the stock market. Since our establishment, we have helped thousands of students just like you learn how to navigate the stock market and become successful traders.
                </div>
                <div>
                    Our stock trading training platform is an educational initiative of fundfolio and the vision of Sharique Samsudheen, specially designed to help you break out into the world of stock market and claim your financial freedom.
                </div>
                <div>
                        <span className='about__numbers'>800k+ </span>FOLLOWERS    <span className='about__numbers'>100k+ </span>STUDENTS    <span className='about__numbers'>3000+ </span>Traders

                </div>
            </div>

        </div>
    );
}

export default About;