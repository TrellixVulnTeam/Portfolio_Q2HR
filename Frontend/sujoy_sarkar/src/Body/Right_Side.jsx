import React from 'react'
import "../CSS/Right_Side.css"
import Particles from 'react-particles-js';

function Right_Side() {
    return (

        <div className="right-side">
            <br></br>
            <br></br>
            <div className='home-intro-div' style={{ marginLeft: '50px', }}>
                <br></br>
                <h1 style={{ color: 'white', fontSize: '5.2vw', margin: '0' }}>Hi,<br />I'm Afran,<br /> App & Web Developer.</h1>

                <h3 style={{ color: 'white', fontSize:'1.5vw'}}>Full Stack Developer | Content Creator | Entrepreneur</h3>

            </div>

            <Particles
                className='particles'
                height='100vh'
                width='88vw'
                params={{
                    "particles": {
                        "number": {
                            "value": 95
                        },
                        "size": {
                            "value": 1
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                    

                }}>



            </Particles>

        </div>
    )
}

export default Right_Side
