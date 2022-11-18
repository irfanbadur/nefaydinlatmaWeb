import React from 'react'
import {Row,Col} from 'react-bootstrap'
export default function Iletisim() {
  return (
    <div>
      <br></br>
      <Row>
        <Col>Adres</Col>
        <Col>DuhaSertKaya Caddesi Altınyaprak Mah. No:17/A Bafra/SAMSUN</Col>
      </Row>
      <Row>
        <Col>Tel:</Col>
        <Col>0 362 542 50 70</Col>
      </Row>
      <Row>
        <Col>email:</Col>
        <Col>nefaydinlatmaenerji@outlook.com </Col>
      </Row>
      <Row>
        <Col>web</Col>
        <Col>nefaydinlatmaenerji.com</Col>
      </Row>

   
      <div id="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your email address" />
            <textarea placeholder="Your message"></textarea>
            <button>Send Message</button>
            <span>Thank you for your message, we will be in touch in no time!</span>
        </div>



    </div>
  )
}
