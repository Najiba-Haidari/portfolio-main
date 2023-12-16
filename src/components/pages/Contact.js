import React, { useState } from 'react';
import { checkContent, validateEmail } from '../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [textarea, setTextarea] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setTextarea(inputValue);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return ;
    }
    if (!checkContent(textarea)) {
      setErrorMessage(
        `Please write a message: ${userName}`
      );
      return;
    }
    alert(`Thanks for the Message ${userName}`);
    setUserName('');
    setEmail('');
    setTextarea('');
    setErrorMessage('');
  };

  return (
    <div className='container-contact d-flex justify-content-center' id='contact' style={{height:'80vh', paddingTop: '80px', paddingBottom:'30px'}}>
    <div className='container-form '>
      <h3 className='heading-form mt-4'>Contact Me!</h3>
      <form className="form d-flex flex-column p-4 rounded">
        <input
        className='p-2 my-2'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
        className='p-2 my-2'
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
        />
        <textarea
        className='textarea p-2 my-2'
        value={textarea}
          name="textarea"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message"
         >
          Please write your message
          </textarea>
        <button className='submitButton btn-primary btn p-2 my-2' type="submit" onClick={handleContactSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div className='errorMessage' >
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Contact;
