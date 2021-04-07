import React, { useEffect, useState } from 'react'
import '../CSS/Work.css'
import axios from 'axios'
import { Link } from "react-router-dom";



function WorkPage() {

    var [worklists, setWorklists] = useState([])
    var linkStyle = {textDecoration:'none'}
    function fetchData() {
        axios.get("http://localhost:5100/WorkList")
            .then(response => {

                setWorklists(response.data);
            })
            .catch(error => {
                console.log(error);

            })
    }

    useEffect(() => {
        fetchData();
    })

    return (

        <div className="work-page">

            {worklists.map((item) =>
                <Link to="workdetails" style={linkStyle}>
                    <div className="item">
                        <div className="items-image" style={{ backgroundImage: "url(" + item.images[1] + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                        <p className="items-title">{item.title}</p>
                    </div>
                </Link>

            )}

        </div>


    )
}

export default WorkPage
