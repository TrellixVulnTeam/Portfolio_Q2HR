import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Social_Icon() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      

    var iconSize = '1.5vw';
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           <FaFacebookF onClick={()=>openInNewTab("https://www.facebook.com/afran.nisho.5249")} size={iconSize}  className="social-icon"/> 
           <FaLinkedinIn onClick={()=>openInNewTab("https://www.linkedin.com/in/sujoy-sarkar-473b021a9/")} size={iconSize}  className="social-icon"/>
           <FaSkype onClick={()=>openInNewTab("https://join.skype.com/invite/VyLdUJ6hhi5k")}  size={iconSize}  className="social-icon"/>
           <FaGithub onClick={()=>openInNewTab("https://github.com/SujoySarkar")} size={iconSize}  className="social-icon"/>
        </div>
    )
}

export default Social_Icon
