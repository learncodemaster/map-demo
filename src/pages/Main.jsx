import React from 'react';
import {Home} from "../components/home"
function Main(props) {
    console.log("Main props", props);
    let data = [
        { 
            lat:24.946258850809432,
            long:55.09899590602142,
            color:"blue",
            name:"bus"
        },
        {
            lat:24.956258850809432,
            long:55.10899590602142,
            color:"blue",
            name:"bus"
        },
        {
            lat:24.966258850809432,
            long:55.11899590602142,
            color:"blue",
            name:"bus"
        }
    ]
    return (
        <div className="App">
            <Home markerData={data}/>
        </div>
    );
}

export default Main;