import React, { useState , useRef, useEffect } from 'react';
import emailJs from "emailjs-com";
import Button from 'react-bootstrap/Button';

import  '../Css/contact.css';
import Input from '../Components/Input';

function Contact() {

    const [showResult,setShowResult] = useState('');
    const [showError,setShowError]   =  useState('');
    const form = useRef();

    function sendEmail (e) {
        e.preventDefault();

        emailJs.sendForm("service_iylqjde","template_2ovk5q8",form.current,"user_pGdRJ3YF71u8D37BK8WPH")
        .then((result) => {
            if(result.text == "OK"){
                setShowResult("true");
                setTimeout(() => {
                    setShowResult("");
                    form.current.reset();
                }, 2000);
            }
        }, (error) => {
            setShowError('true');
            setTimeout(() => {
                setShowError('');
                form.current.reset();
            }, 2000);
        });
        
    }



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
                    <div className = "right__height" >
                         <p className={ `rightp ${showResult ? 'rightpanim' :'rightzero'}`} >
                            Email sent successfully</p> 
                        { showError && <p className= "righterror"> Please try again later</p> }
                    </div>
                    <p>Or use this form</p>
                    <form  ref={form} onSubmit={sendEmail}>
                        <Input type="text" name="name" placeholder ="Your Name*" />
                        <Input type="email" name="email"  placeholder ="Your Email*" />
                        <Input type="textarea" name="message" placeholder ="How can I help?*" />
                        <Button type="submit" variant="outline-primary">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
