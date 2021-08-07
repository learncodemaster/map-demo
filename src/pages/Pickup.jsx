import React from 'react';
import {Home} from "../components/home"
function Pickup(props) {
    console.log("Pickup props", props);
    let data = [
        {
            lat:24.846258850809432,
            long:55.12899590602142,
            color:"yellow",
            name:"pickup"
        },
        {
            lat:24.946258850809432,
            long:55.09899590602142,
            color:"yellow",
            name:"pickup"
        },
        {
            lat:24.106258850809432,
            long:55.18899590602142,
            color:"yellow",
            name:"pickup"
        }
    ]
    return (
        <div className="App">
            <Home markerData={data}/>
        </div>
    );
}

export default Pickup;