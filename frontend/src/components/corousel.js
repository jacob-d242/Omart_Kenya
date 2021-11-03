import React from 'react'
import { Carousel } from 'react-bootstrap';
export const corousel = () => {
    return (
        <div>
              <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://as1.ftcdn.net/v2/jpg/04/52/13/84/1000_F_452138496_VAoJgY9B9yQoooV6vjY5rCC7PE6eg98Z.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://stock.adobe.com/collections/NvO5yC6haRP7IDj9rPzeacMHWdJTbH3o"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://stock.adobe.com/collections/NvO5yC6haRP7IDj9rPzeacMHWdJTbH3o"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
        </Carousel>
        </div>
    )
}

