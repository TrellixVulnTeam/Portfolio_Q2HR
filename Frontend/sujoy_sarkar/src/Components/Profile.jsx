import React from 'react'
import SujoySarkar from "../Assets/sujoy_sarkar.png"

function Profile() {
    return (
        <div style={{ height: '12vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src={SujoySarkar} style={{ height: '7vw' }}></img>
            <h1 style={{ fontSize: '1.1vw', marginTop: '5px', marginBottom: '0', padding: '0', color: 'white' }}>Sujoy Sarkar</h1>
            <p style={{ fontSize: '0.8vw', margin: '0', padding: '0', color: 'white' }}>Developer</p>
        </div>
    )
}

export default Profile
