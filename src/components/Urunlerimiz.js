import React from 'react'
import {Image,Carousel,Container} from 'react-bootstrap'
export default function Urunlerimiz() {
  return (
    <Container>
    <Carousel className='m-5'>
    <Carousel.Item>       
      <Image src={require("../img/urun1.jpg")} fluid/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
    <Image src={require("../img/urun2.jpg")} fluid/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <Image src={require("../img/urun3.jpg")} fluid/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Container>
  )
}
