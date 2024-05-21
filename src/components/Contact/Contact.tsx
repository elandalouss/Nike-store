import './Contact.css'

const Contact = () => {
  return (
    <div className="Contact">
        <h2>We happy to recieve your feedback</h2>
        <div className="email_area">
            <label>Enter your email</label>
            <input type="email" maxLength={49}/>
        </div>
        <div className="textarea_area">
            <label>Enter your message</label>
            <textarea name="" id=""></textarea>
        </div>
        <input className='submit' type="submit" />
    </div>
  )
};

export default Contact;
