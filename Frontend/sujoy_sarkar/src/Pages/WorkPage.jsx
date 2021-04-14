import React, { useEffect, useState } from 'react'
import '../CSS/Work.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function WorkPage() {
    const history = useHistory();

    const routeChange = (individialItem) => {
        let path = "/work/workdetails";
        history.push({ 
            pathname: path,
            state: { detail: individialItem }
         });

    }


    var [worklists, setWorklists] = useState([])
    var linkStyle = { textDecoration: 'none' }
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
                <div >
                    <div className="item" onClick={() => routeChange(item)}>
                        <div className="items-image" style={{ backgroundImage: "url(" + item.images[1] + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                        <p className="items-title">{item.title}</p>
                    </div>


                </div>

            )}

        </div>
    )
}

export default WorkPage

