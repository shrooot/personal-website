import React from 'react';
import { Form, Button } from 'react-bootstrap';
import imgContact from '../../assets/Effiel.jpg';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='main-content'>
        <div className='left-container'>
          <div className='banner'>
            <h1>Get in touch with Yashraj</h1>
            <h4>Hopefully your search for a perfect candidate ends here :)</h4>
          </div>
          <div className='form-container'>
            <Form className='contact-form'>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Name'
                  required={true}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='org'>
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Organization name'
                  required={true}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  required={true}
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
              />
              <Button className='submit-button' variant='primary' type='submit'>
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
                <a href='https://www.instagram.com/conficker_exe/'>Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
