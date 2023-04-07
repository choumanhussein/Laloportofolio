import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import facebook from "../../Assets/facebook.png"
import twitter from "../../Assets/twitter.png"
import whatsapp from "../../Assets/whatssap.png"
import messenger from "../../Assets/messenger.png"
import resume from "../../Assets/resume.png"
import Text from '../Homepage/Text'

function Home() {
  return (
    <div className='homepagebackground'>
      <div className='test'>
        <Container>
          <Row>
            <Col md={2}>
              <h2 className='headtext'><span className='wave'> </span></h2>

              <div className='socialtext'>
                <button onClick={() => {
                  window.open("https://www.facebook.com/profile.php?id=100009553171148");
                }}
                  className='socailmediabtn'><img src={facebook} width={60} alt='facebook-logo' /></button>
                <button onClick={() => {
                  window.open("https://www.facebook.com/messages/t/100009553171148");
                }}
                  className='socailmediabtn'><img src={messenger} width={60} alt='messenger-logo' /></button>
                <button onClick={() => {
                  window.open("https://twitter.com/reyjiye");
                }}
                  className='socailmediabtn'><img src={twitter} width={60} alt='twitter-logo'/></button>
                <button onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=2250787536160");
                }}
                  className='socailmediabtn'><img src={whatsapp} width={60} alt='whatsapp-logo' /></button>
              </div>
            </Col>
            <Col md={5}>
              <h2 className='headtext'><span className='wave'> </span></h2>
              <div className=''>
                <span className='nametext'>Hi, <span className='nametext2'>I'm Lalo</span>,</span><br/>
                <Text />
                <div className="resume-button-container">
  <a href="https://drive.google.com/file/d/1G5X4cH6A0ol2EM6fPnEZQy94RW0muwQR/view?usp=drivesdk"  target='_blank' rel="noreferrer">
    <img src={resume} width={150} alt='resume-button'/>
  </a>
</div>
              </div>
            </Col>

            <Col md={5}>
              <div className="imagedeveloper">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home
