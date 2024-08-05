import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useSweetAlert } from '../../../context/alerts/Sweetalert';

const MiddleForm = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState("");
    const {normalALert} = useSweetAlert();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(fullname.length > 5 && email.length !== 0 && subject.length > 15 && message) {
            if(!pattern.test(email)) {
                normalALert("info", "Email Validation", "You entered the incorrect email address", true)
            }

            if(message.trim().split(/\s+/).length > 200) {
                normalALert("info", "Message Length", "Your message is above 200 words", true)
            }
            setFullName("");
            setEmail("");
            setSubject("");
            setMessage("");
            normalALert("success", "Message send Successful!!!", "We will notify the Michael Douglas through notifications that you sent the message, Thank you and stay connected, for updates and more.", true)
        }else{
            normalALert("info", "Form Fields Required", "You must fill all the fields to continue...", true)
        }
    }
    useEffect(() => {
        AOS.init();
    })

  return (
    <section>
     <div className="top-message" data-aos="zoom-out-up">
     <p>Welcome to my portfolio! Stay connected by reaching out through the contact form. Share your thoughts, inquiries, or collaboration ideas with ease. Your message is valuable, and I'm here to listen.</p>
     </div>
     <div className="form">
        <form name="contact" netlify>
            <div className="headings"><h3>Enter valid information *</h3></div>
            <div className="groups">
                <div className="form-group">
                    <span>Your Full Name</span>
                    <input type='text' placeholder='Eg: Michael Douglas' name='name' value={fullname} onChange={(text) => setFullName(text.target.value)}/>
                </div>
                <div className="form-group">
                    <span>Email Address</span>
                    <input type='text' placeholder='Eg: gtechmb27.infinity@gmail.com' name='email' value={email} onChange={(text) => setEmail(text.target.value)}/>
                </div>
            </div>
            <div className="form-group">
                <span>Subject</span>
                <input type='text' placeholder='Eg: Requesting for...' name='subject' value={subject} onChange={(text) => setSubject(text.target.value)}/>
            </div>
            <div className="form-group">
                <span>Your message</span>
                <textarea placeholder='Eg: Is there a possibility we can merge out thoughts and work on....(Must be below 200words)' name='message' value={message} onChange={(text) => setMessage(text.target.value)}/>
            </div>
            <div className="form-group">
                <button onClick={onFormSubmit} type="submit">Send Message</button>
            </div>
        </form>
     </div>
     <div className="notice">
        <p><span>Note:&nbsp;</span>Using valid information makes communication feedback effective, Thanks you.</p>
     </div>
    </section>
  )
}

export default MiddleForm
