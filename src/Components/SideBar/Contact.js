import React, {useState} from 'react';
import firebase from '../../firebase/config'
import housepic from '../../items/imgs/house.png'
import phonepic from '../../items/imgs/phone.png'
import emailpic from '../../items/imgs/envelope.png'

export const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [msg, setMsg] = useState('hide');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const submitForm = (e) =>{
        e.preventDefault();
        if(values.name.trim() !== "" && values.email.trim() !== ""  && values.message.trim() !== ""){ 
            setMsg('success') 
            firebase
                .firestore()
                .collection('messages')
                .add({
                    ...values
                }).then(()=>{
                    setValues({
                        name: '',
                        email: '',
                        subject:'',
                        message:''
                    })
                })
        }
        else{
            alert("Missing information, please fill in name, email and message")
        }
        
    };




    return (
        <div id="contact">
            <div>
                <h2>Get in Touch</h2>
                <div className="contactdetails fchild">
                    <img src={emailpic} alt="Email"/><p><a id='emaillink' href="mailto:marcodomingues.md@gmail.com">marcodomingues.md@gmail.com</a></p>
                </div>
                <div className="contactdetails">
                    <img src={phonepic} alt="Phone"/><p>+44 (0)7 840 399 131</p>
                </div>
                <div className="contactdetails">
                    <img src={housepic} alt="Address"/><p>NW8 London</p>
                </div>
            </div>
            <form action="submit" id="messageform" onSubmit={submitForm}>
                <h2>Message me</h2>
                <input 
                    type="text"
                    name='name'
                    id='name'
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input 
                    type="email"
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input 
                    type="text"
                    name='subject'
                    id='subject'
                    value={values.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                />
                <textarea 
                    type="textfield"
                    name='message'
                    id='message'
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Message"
                />
                <button type="submit">Send Message</button>
            </form>
            <div id="successMsg" className={msg}>Thank you for your message, I will get back to you!</div>
            
        </div>
    )
}

export default Contact;
