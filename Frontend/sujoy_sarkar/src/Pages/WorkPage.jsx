import React from 'react'
import '../CSS/Work.css'
import Background from '../Assets/app-dev.jpg'

function WorkPage() {

    var myArray = ["one", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",];

    return (

        <div className="work-page">

            {myArray.map((item) => <div className="items" style={{ backgroundImage: "url(" + Background + ")" }}></div>)}

        </div>


    )
}

export default WorkPage
