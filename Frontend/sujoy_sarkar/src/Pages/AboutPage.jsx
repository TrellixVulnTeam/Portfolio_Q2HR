import React from 'react'
import Lottie from 'react-lottie';
import MyAnimation from '../Assets/lottie_animation.json';
import '../CSS/About.css'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


function AboutPage() {
  var linkStyle = {textDecoration:'none'}
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="about-page">
      <br></br>
      <br></br>
      <div className="about-myself">
        <h1>My, Myself & I</h1>
        <p>
          I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.<br></br> <br/>
          Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature.<br></br> <br/>
          A family person and father of two fractious boys,
          Interested in the entire frontend spectrum and working on ambitious projects with positive people.
       </p>
        <Link to="/contact" style={linkStyle}>
        
        <Button variant="contained" color="primary">
          Let's convert your ides's into reality
        </Button>
        
        </Link>
        

      </div>

      <Lottie
        options={defaultOptions}
        height='40vh'
        width='30vw'
      />

    </div>
  )
}

export default AboutPage
