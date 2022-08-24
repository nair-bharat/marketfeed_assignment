import './Contact.css';
import image from '../assets/talktous_image.png';

const Contact = () => {
    return (
        <div className='contact__container'>
            <div>
                Talk to Us
            </div>
            <div>
                <div>
                    <div>
                        Send us an Email
                    </div>
                    <div>
                        hello@fundfolio.in
                    </div>
                </div>
                <div>
                    <div>
                        Give us a call
                    </div>
                    <div>
                        +91 99006 63322
                    </div>
                </div>

            </div>
            <div>
                <img src={image} alt="image" />
            </div>

        </div>
    );
};

export default Contact;