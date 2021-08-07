import React from 'react';
import {Home} from "../components/home"
function Car(props) {
    console.log("Car props", props);
    let data = [
        {
            lat:24.946258850809432,
            long:55.09899590602142,
            color:"red",
            name:"car"
        },
        {
            lat:24.966258850809432,
            long:55.09899590602142,
            color:"red",
            name:"car"
        },
        {
            lat:24.986258850809432,
            long:55.09899590602142,
            color:"red",
            name:"car"
        }
    ]
    return (
        <div className="App">
            <Home markerData={data}/>
        </div>
    );
}

export default Car;