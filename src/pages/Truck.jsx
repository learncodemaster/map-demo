import React from 'react';
import {Home} from "../components/home"
function Truck(props) {
    console.log("Truck props", props);
    let data = [
        {
            lat:24.946258850809432,
            long:55.09899590602142,
            color:"green",
            name:"truck"
        },
        {
            lat:24.986258850809432,
            long:55.19899590602142,
            color:"green",
            name:"truck"
        },
        {
            lat:24.996258850809432,
            long:55.24899590602142,
            color:"green",
            name:"truck"
        }
    ]
    return (
        <div className="App">
            <Home markerData={data}/>
        </div>
    );
}

export default Truck;