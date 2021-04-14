import React from 'react'
import { useHistory } from "react-router-dom";
import "../../CSS/Details.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';

function WorkDetails(props) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  const history = useHistory();
  console.log(history.location.state.detail);
  return (
    <div className="work-details">
      <br></br>

      <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} className="carousel-slider">
        {
          history.location.state.detail.images.map((image) => <img src={image}></img>)
        }
      </Carousel>
      <h1>{history.location.state.detail.title}</h1>
      <h3>{history.location.state.detail.description}</h3>
      <h2>Project Completion Date: {history.location.state.detail.date}</h2>
      <h4>Developed With: {history.location.state.detail.technology}</h4>
      <br></br>

      <Button onClick={()=>openInNewTab(history.location.state.detail.link)} className="button" variant="contained" color="primary">
        Click Here To Check.
        </Button>
      <br></br>
      <br></br>


    </div>
  )
}

export default WorkDetails
