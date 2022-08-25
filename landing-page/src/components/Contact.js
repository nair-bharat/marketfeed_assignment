import './Contact.css';
import talktous_image from '../assets/talktous_image.png';

const Contact = () => {
    return (

        <div>
            <div className='contact__container'>
                <div>
                    <div className='contact__header'>
                        Talk to Us
                    </div>

                    <div className='contact__body'>
                        <div className='contact__body_box box_color'>
                            <div className='box_header'>
                                Send us an Email
                            </div>
                            <div className='box_content'>
                                hello@fundfolio.in
                            </div>
                        </div>
                        <div className='contact__body_box box_color'>
                        <div className='box_header'>
                                Give us a call
                            </div>
                            <div className='box_content'>
                                +91 99006 63322
                            </div>
                        </div>
                        <div className='contact__body_box image_box'>
                            <div>
                                <img src={talktous_image} alt="talktous_image" />
                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </div>

    );
};

export default Contact;