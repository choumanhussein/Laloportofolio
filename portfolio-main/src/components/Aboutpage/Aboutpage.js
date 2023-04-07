import React from 'react'
import '../../pages/style.css';
import { Row, Col } from 'react-bootstrap'
import marque from "../../Assets/marque.jpg"


function Aboutpage() {
    return (
        // <div className='aboutpagebackground'>
            // <Container>
              
            <Row className='textbackground row-padding'>
                   <Col md={6} className="webimage">
                        <div className='awards'>
                          <h3 className='awards-title'>Awards</h3>
                          Winner of the GRAPHICS<br/> categrory of the Numeris<br/> Golden Talent Challenge <br/>(2019) 

                          <br/>Finalist In The Young <br/> Talent Competiton <br/>of the Grand Prix <br/> de la Publicité Africaine<br/> (2019 & 2020)
                        </div>
                    </Col>
                    <Col md={6} className="webimage1" >
                        <p className='aboutdetails'>
                          I have had the privilege of participating in the conception and realization of a wide variety of 
                          communication projects trough my experience in companies, communication agencies, independent projects, individuals,
                          student projects, but also creative competitions organized by locally and internationally.
                        </p>
                        <br/>
                        <h6><b>ORANGE CÔTE D’IVOIRE, ORANGINA, SIB, MANSA BANK, BANQUE ATLANTIQUE, BONNET ROUGE, SUCAF, SOLIBRA, BRASSIVOIRE, LE SARA, SUNU ASSURANCES, DJAMO, TEDX, LA FONDATION L'OREAL etc, are some of the advertisers I have worked for.</b>
                        </h6>
                        <div ><img className='marque' src={marque}/></div>
                        <div>
                          <span>My technical skills in the implementation of my work are described in the following points:<br/><br/> </span>
                          <b>Creation of concepts and variation of visuals for advertising campaigns Digital adaptation of key visuals and graphic creation of advertising gadgets - UX / UI / Responsive design - Creation of interactive models - Layout of documents, (small and large formats) - Creation of films for offset printing on various media (print and digital) - Knowledge of video and motion design - Realization of traditional / digital drawings, etc.</b>
                          <br/>
                          <br/>
                          Particularly in love with problem-solving, my interests and my most memorable projects are related to the resolution of social issues with the help of visual educational digital tools designed via computer programs, especially graphic editing software. <br/> <br/>These include the ADOBE Suite (Photoshop - Illustrator - Indesign - XD Premiere Pro - After Effect) and others such as Figma Wordpress, etc.
                        </div>
                        

                    </Col>
                    
                   
                </Row>
            /* </Container> */
        // </div>
    )
}

export default Aboutpage