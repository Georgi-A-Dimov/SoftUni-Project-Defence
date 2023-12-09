import Carousel from 'react-bootstrap/Carousel';

function InfoSection() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider-bg-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='hero-item'>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="#" className="site-btn">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider-bg-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='hero-item'>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="#" className="site-btn">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/slider-bg-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='hero-item'>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="#" className="site-btn">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default InfoSection;