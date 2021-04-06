import React from 'react'

function Nav_Item(props) {
    
    return (
        <div className="nav-item">
            {props.icon}
            <p style={{margin:'0', color:'white', fontWeight:'w500', fontSize:'1vw'}}>{props.title}</p>
            
        </div>
    )
}

export default Nav_Item
