import React from 'react'
import { useHistory } from "react-router-dom";

function WorkDetails(props) {
    const history = useHistory();
    return (
        <div>

            <button onClick={() => {
                console.log(history.location.state.detail)
            }}> click me buddy</button>

        </div>
    )
}

export default WorkDetails
