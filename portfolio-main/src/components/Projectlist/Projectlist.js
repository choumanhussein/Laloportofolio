import React, { useState } from 'react';
import '../../pages/style.css';
import { Carousel } from 'react-bootstrap';
import elder from '../../Assets/elder.png';
import need from '../../Assets/need.png';
import japan from '../../Assets/japan.png';
import parcours from "../../Assets/parcours.jpg";
import walpapper from "../../Assets/wallpaper.jpg";
import contact from '../../Assets/contact.jpg';
import connectprojects from '../../Assets/connectprojects.jpg'
import japanconnect from '../../Assets/japanconnect.jpg'
import landing from '../../Assets/landing.jpg'
import nntconnect from '../../Assets/nntconnect.jpg'
import nntexplanation from '../../Assets/nntexplanation.jpg'
import nntphone from '../../Assets/nntphone.jpg'
function Projectlist() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      imgPath: elder,
      title: 'ELDER AU JAPON',
      description: "ElderauJapon is a digital multimedia information platform; a non-profit organization, existing mainly as a responsive website, which aims to promote study abroad opportunities. Primarily promoting the excellence of Japanese education, it contributes greatly to enabling thousands of students around the world, especially those in difficult circumstances, to continue their studies by providing practical solutions and advice on scholarship offers that match their profile as well as professional opportunities in Japan and the rest of the world. Initiated by Dr. Elder Akpa, a doctor of computer science specializing in connected operating techniques and leader of innovations within the multinational Schneider Electric. Within this non-profit association, of which I am the visual communication manager, several digital solutions are produced to facilitate users' access to information on opportunities that will enable them to make spectacular progress in their professional careers."
    },
    {
      imgPath: parcours,
      imglogo: elder,
      imgPathstyle: {width:'80%'}
    },
    {
      imgPath: walpapper,
      imglogo: elder,
      imgPathstyle: {width:'80%'}
    },
    {
      imgPath: contact,
      imglogo: elder,
      imgPathstyle: {width:'80%'}
    },
    // {
    //   imgPath: elderphone,
    //   imglogo: elder,
    //   imgPathstyle: {width:'70%'}
    // },
    {
      imgPath: need,
      title: 'Need2Talk',
      description: "To reduce the enormous gap that is growing every day in our societies due to mental disorders and their multiple impacts on the mental health of the populations, by means of a technological tool, pleasant and soothing and especially accessible to all. This is the objective of Needtotalk, a social-network platform whose main characteristic is to help as many people as possible through 'the liberation of their word' within a reassuring community, This high-impact project, conceived and developed by Hussein Chouman, an aspiring computer engineer, has the particularity of being able to offer users not only a space for sharing, but also a tool for consolation and prevention of mental illness. Deployed as a website and a responsive application, Needtotalk, on which we are still working intensively, is already distinguished by its visual identity, which we wanted to be very descriptive of the tool's objective.",
    },
    {
      imgPath: nntconnect,
      imglogo: need,
      imgPathstyle: {width:'70%'}
    },
    {
      imgPath: nntexplanation,
      imglogo: need,
      imgPathstyle: {width:'100%'}
    },
    {
      imgPath: nntphone,
      imglogo: need,
      imgPathstyle: {width:'70%'}
    },
    {
      imgPath: japan,
      title: 'JAPAN-CONNECT',
      description: 'Japan remains one of the most important business hubs in the world in many sectors. The promotion of the private sector in this part of the world has a significant impact on many other aspects of its economy and the performance in terms of constant economic progress is a testimony to this. To inspire and connect Japan to Africa, which has a lot to learn from it, as well as to other parts of the world where Japan has a lot of implications in development. In charge of the creation of the visual elements and the deployment of the communication device of this platform which will take shape under several aspects (Forums & Exhibitions, Meetings and panels) it is with a lot of enthusiasm that I continue little by little the construction of this project whose main point of information is the website which we regularly update for the achievement of this grandiose objective',
    },
    {
      imgPath: japanconnect,
      imglogo: japan,
      imgPathstyle: {width:'80%'}
    },
    {
      imgPath: connectprojects,
      imglogo: japan,
      imgPathstyle: {width:'80%'}
    },
    {
      imgPath: landing,
      imglogo: japan,
      imgPathstyle: {width:'80%'}
    },

  ];

  const handleSelect = (selectedIndex, e) => {
    setSelectedProject(selectedIndex);
  };

  return (
    <div className="projectbackground">
      <Carousel activeIndex={selectedProject} onSelect={handleSelect}>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-container d-flex align-items-center justify-content-center">
              <div className='image d-flex align-items-center justify-content-center'>
                
              <img className='carousel-image' src={project.imglogo} alt='carouselimag'></img>
                <div><img
                className='carousel-image'
                style={project.imgPathstyle}
                src={project.imgPath}
                alt='carousel'
                
              />
              </div></div>
              <div className="carousel-text ">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Projectlist;
