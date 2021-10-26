import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import imgContact from '../../assets/Effiel.jpg';
import './contact.css';
import SecNavbar from '../secondryNavbar/SecNavbar';
import { send } from 'emailjs-com';

import { init } from 'emailjs-com';
init('user_UWPnH5cf0c9OqST5wQP72');

const Contact = () => {
  // service_kx0lwzr
  const [toSend, setToSend] = useState({
    from_name: '',
    from_org: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      'service_kx0lwzr',
      'template_ffmomoe',
      toSend,
      'user_UWPnH5cf0c9OqST5wQP72'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({from_name : ""})
        setToSend({from_org: ""})
        setToSend({message: ""})
        setToSend({reply_to: ""})
        window.alert("Message sent successfully to Yashraj")
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <SecNavbar />
      <div className='contact-wrapper'>
        <div className='main-content'>
          <div className='left-container'>
            <div className='banner'>
              <h1>Get in touch with Yashraj</h1>
              <h4>
                Hopefully your search for a perfect candidate ends here :)
              </h4>
            </div>
            <div className='form-container'>
              <Form className='contact-form' onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter your Name'
                    required={true}
                    name='from_name'
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='org'>
                  <Form.Label>Organization</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Organization name'
                    required={true}
                    name='from_org'
                    value={toSend.from_org}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    required={true}
                    name='reply_to'
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                  <Form.Text className='text-muted'>
                    I'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Control
                  className='txt-area'
                  as='textarea'
                  placeholder='Leave a message here'
                  style={{ height: '100px' }}
                  required={true}
                  name='message'
                  value={toSend.message}
                  onChange={handleChange}
                />
                <Button
                  className='submit-button'
                  variant='primary'
                  type='submit'
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className='right-container'>
            <div className='img-container'>
              <img src={imgContact} alt='' />
            </div>
            <div className='contact-info'>
              <h2>Contact Info</h2>
              <h3>Contact Yashraj Singh</h3>
            </div>
            <div className='contact-details'>
              <p>
                <strong>Email: </strong>
                yashrajsingh977@gmail.com
              </p>
              <p>
                <strong>Phone: </strong>
                +91-8329276162
              </p>
              <p>
                <strong>Location: </strong>
                Mumbai, India
              </p>
              <h2>Social Networks</h2>
              <ul className='socials'>
                <li>
                  <a href='https://www.linkedin.com/in/yashraj-singh-02/'>
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href='https://github.com/yashraj-02-techie'>GitHub</a>
                </li>
                <li>
                  <a href='https://twitter.com/yashraj_02'>Twitter</a>
                </li>
                <li>
                  <a href='https://www.instagram.com/conficker_exe/'>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
