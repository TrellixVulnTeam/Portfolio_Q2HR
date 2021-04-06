import React from 'react'
import "../CSS/MySkills.css"



function MySkillsPage() {

    return (
        <div className="skills-experience">

            <div className="myskills">
                <h1>Skills & <br>
                </br>Experience</h1>
                <p>
                    Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.<br /> <br />

                    I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.<br /> <br />

                    I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
                </p>



            </div>
            
            <div className="skills-list">

                <h2>Frontend</h2>
                <div className="containerone">
                    <div className="progress-bar"></div>
                </div>

                <h2>Backend</h2>
                <div className="containertwo">
                    <div className="progress-bar"></div>
                </div>

                <h2>Database</h2>
                <div className="containerthree">
                    <div className="progress-bar"></div>
                </div>
                 
                 <br/>
                 <br/>
                 <div className="cards">
                 <div>
                 <div className="cardone">
                  
                  </div>
                 <h3 style={{color:'white'}}>Mobile App</h3>
                 </div>
                
                
                 
                 <div>
                 <div className="cardtwo">
                 
                 </div>
                 <h3 style={{color:'white'}}>Web App</h3>

                 </div>
                
                 </div>
                 



            </div>


        </div>
    )
}

export default MySkillsPage
