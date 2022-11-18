import React, { useState } from 'react'
import {Container,InputGroup,Form,Button} from 'react-bootstrap'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message) {
       // TODO - send mail

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
}
const isValidEmail = email => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};
    return (
        <div>
        <div id="contact-form">
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button onClick={submit}>Send Message</button>
        <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </div>

        <Container className='mx-auto ' style={{ width: "400px" }}>
             <>
      <InputGroup   className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm"  >Adınız</InputGroup.Text>
        <Form.Control
          value={name} onChange={e => setName(e.target.value)}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          email adresiniz
        </InputGroup.Text>
        <Form.Control
          value={email} onChange={e => setEmail(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup  >
        <InputGroup.Text id="inputGroup-sizing-lg">Mesajınız</InputGroup.Text>
        <Form.Control
          value={message} onChange={e => setMessage(e.target.value)}
          as="textarea" rows={3}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Button  className='m-3' onClick={submit}>Gönder</Button>
    </>
        </Container>
        </div>
    );
};

export default Contact;
 