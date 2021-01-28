import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import Aos from "aos"
import "aos/dist/aos.css"

const Vision = () => {

  useEffect(() => {
		Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <Container className="visioncomp" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <div data-aos="fade-right" className="col-lg-5 offset-lg-1 col-sm-12" style={{ padding: '20px' }}>
          <h1><img src="assets/images/dream.png" style={{ height: '4rem' }} alt="Dream" /> DREAM.</h1>
          <p>Dream to elucidate problems</p>
        </div>
        <div data-aos="fade-left" className="col-lg-5 offset-lg-7 col-sm-12" style={{ padding: '20px' }}>
          <h1>BUILD.</h1>
          <p>Build solutions</p>
        </div>
        <div data-aos="fade-right" className="col-lg-4 offset-lg-1 col-sm-12" style={{ padding: '20px' }}>
          <h1>ACHIEVE.</h1>
          <p>Achieve the limitless</p>
        </div>
      </Container>
    </div>
  )
}

export default Vision
