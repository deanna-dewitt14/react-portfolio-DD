import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
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
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid');
      return;
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <section id='reach-out' className='contact'>
      <div className='flex-row'>
        <h2 className='section-title secondary-border'>Reach Out</h2>
      </div>

      <div className='contact-info'>
        <div>
          <h3>Hello! {userName}</h3>
          <p>Lets get in touch!</p>
          <address>
            Raleigh, NC <br />
            <a href='tel:919.500.3991'>919-500-3991</a>
            <br />
            <a href='mailto://deanna.dewitt14@gmail.com'>
              deanna.dewitt14@gmail.com
            </a>
          </address>
        </div>

        <div className='contact-form'>
          <h3>Contact Me</h3>
          <form className='form'>
            <label for='contact-name'>Your Name</label>
            <input
              value={userName}
              name='userName'
              onChange={handleInputChange}
              type='text'
              id='contact-name'
            />

            <label for='contact-email'>Your Email</label>
            <input
              value={email}
              name='email'
              onChange={handleInputChange}
              type='email'
              id='contact-email'
            />

            <label for='contact-message'>Message</label>
            <textarea
              value={message}
              name='message'
              onChange={handleInputChange}
              type='message'
              id='contact-message'
            />
            <button type='button' onClick={handleFormSubmit}>
              Send
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;