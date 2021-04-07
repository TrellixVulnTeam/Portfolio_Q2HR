import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import MyAnimation from '../Assets/lottie_animation.json';
import '../CSS/About.css'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import axios from 'axios'

function AboutPage() {

  var [about, setAbout] = useState({})
  
  function fetchData() {
    axios.get("http://localhost:5100/about")
      .then(response => {
        
        setAbout(response.data[0]);
        console.log(about);
      })
      .catch(error => {
        console.log(error);

      })
  }

  useEffect(() => {
    fetchData();
  })

  var linkStyle = { textDecoration: 'none' }
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
        
        <h1>{about.title}</h1>
        <p>{about.about}</p>

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
