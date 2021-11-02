import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import  '../Css/contact.css';
import Input from '../Components/Input';

function Contact() {

    const [name,setName] = useState('');
    return (
        <div className="contact__div">
            <h1>Let's get in touch</h1>
            <div className="contact">
                <div className="left">
                    <div className="left__div">
                        I am always open to discuss your project. 
                        Please don't hesitate to contact !!
                    </div>
                    <div className="left__flex">
                        Email me at:
                        <span>daniel.p11198@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <p>Or use this form</p>
                    <form>
                        <Input type="text" placeholder ="Your Name*" />
                        <Input type="email" placeholder ="Your Email*" />
                        <Input type="textarea" placeholder ="How can I help?*" />
                        <Button variant="outline-primary">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
