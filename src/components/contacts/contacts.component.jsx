import React, { useRef } from 'react';
import './contact.styles.scss';
import emailjs from '@emailjs/browser';

import send from '../../assets/images/projects/send2.svg';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_0q9yoqa', 'template_0bsv7cb', form.current, 'gq7Hd05eEwo2j_tNV')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          form.current.reset();
          MySwal.fire({
            title: 'Pesan Terkirim!',
            confirmButtonText: 'OK',
            customClass: {
                container: 'container-succed',
                title: 'title-succed',
                confirmButton: 'confirm-succed',
            },
          });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          MySwal.fire({
            title: 'Terjadi Kesalahan!',
            confirmButtonText: 'OK',
            customClass: {
                title: 'title-error',
                confirmButton: 'confirm-error',
            },
          });
        }
      );
  };
  

  return (
    <div className="Contact ani-scale-scroll" id='Contacts'>
        <div className='Contact-container'>
            <div className='Contact-heading animation-up'>
                Contact
            </div>
            <form className="Contact-form animation-up" ref={form} onSubmit={sendEmail}>
                <div className='Contact-identity'>
                      <label htmlFor="nameFrom">Enter your name: </label>
                      <input type="text" name="name_from" placeholder="Name" id="nameFrom" className="Contact-name" required /><br/>

                      <label label htmlFor="emailFrom">Enter your email address: </label>
                      <input type="email" name="email_from" placeholder="Email" id="emailFrom" className="Contact-email" required />
                </div>

                    <div className='Contact-message-container'>
                        <label htmlFor="message"></label>
                        <textarea name="message" id="message" placeholder="Type your message..." className="Contact-message" required></textarea>

                        <button type="submit" variant="contained" className='Contact-button'>
                            <img className='Contact-message-icon' alt='send' src={send} />
                        </button>
                    </div>
      </form>
        </div>
    </div>
  );
};

export default Contact;
