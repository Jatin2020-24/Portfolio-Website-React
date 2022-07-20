import { React, useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useState } from 'react';

const Contact = () => {
    const formRef = useRef()

    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_6llhimp', 
            'template_7vea0dc', formRef.current, '63vBm2Patuaub8KfE')
            .then((result) => {
                setDone(true)
                document.getElementById('btn').value = ''
                document.getElementById('btn1').value = ''
                document.getElementById('btn2').value = ''
                document.getElementById('btn3').value = ''
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <div className="c-bg"> </div>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-title">
                        Let's discuss your project.
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 9414439735
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            jatinalwar2001@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Alwar, Rajasthan
                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>
                            Lorem, ipsum dolo </b>adipisicing elit. Adipisci quo reprehenderit laudantium explicabo repellendus

                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' id='btn' />
                        <input type="text" placeholder='Subject' name='user_subject' id='btn1' />
                        <input type="text" placeholder='Email' name='user_email' id='btn2' />
                        <textarea rows="5" placeholder='Message' name="message" id='btn3'></textarea>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact