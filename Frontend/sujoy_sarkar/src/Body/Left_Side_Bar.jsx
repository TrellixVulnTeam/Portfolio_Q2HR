import React from 'react'
import Nav_Item from '../Components/Nav_Item'
import Profile from '../Components/Profile'
import "../CSS/Left_Side_Bar.css"
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import Social_Icon from '../Components/Social_Icon';
import { Link } from "react-router-dom";




function Left_Side_Bar() {
    
    var iconStyle = { marginLeft: '15px', marginRight: '10px', height: '3rem' }
    var iconSize = "2vw";
    var hrStyle = { height: '1px', border: 'none', backgroundColor: '#242624', margin: '0' }
    var linkStyle = {textDecoration:'none'}
    return (
        <div className="left-side-bar">
            <Profile />
            
            <hr></hr>
            <Link style={linkStyle}  to='/' exact >
            <Nav_Item icon={<FcHome size={iconSize} style={iconStyle} />} title={"Home"} />
            </Link>

            <hr style={hrStyle}></hr>
            <Link style={linkStyle}  to='/about'>
            <Nav_Item icon={<FcAbout size={iconSize} style={iconStyle} />} title={"About"} />
            </Link>
           
            <hr style={hrStyle}></hr>
             <Link style={linkStyle}  to='/skills'>
             <Nav_Item icon={<FcBearish size={iconSize} style={iconStyle} />} title={"My Skills"} />
             </Link>
            
            <hr style={hrStyle}></hr>
            <Link style={linkStyle}  to='/work'>
            <Nav_Item icon={<FcViewDetails size={iconSize} style={iconStyle} />} title={"Work"} />
            </Link>
           
            <hr style={hrStyle}></hr>
            <Link style={linkStyle}  to='/contact'>
            <Nav_Item icon={<FcBusinessContact size={iconSize} style={iconStyle} />} title={"Contact"} />
            </Link>
            

            <hr style={hrStyle}></hr>
            <br></br>
            <Social_Icon />

        </div>
    )
}

export default Left_Side_Bar
