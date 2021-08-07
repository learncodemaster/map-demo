//"AIzaSyDS2W-hshERsaK9c_d2WO0ohPW8Q3LbIFI"
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker"


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Home extends Component {
  static defaultProps = {
    center: {
      lng: 55.15,
      lat: 24.99
    },
    zoom: 11
  };
  render() {
    const { markerData } = this.props;
 
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDS2W-hshERsaK9c_d2WO0ohPW8Q3LbIFI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        {markerData.map((data, index) => {
            console.log(data.lat,"-",index);
            return (
            <Marker
             lat={data.lat}
             lng={data.long}
             name={data.name}
             color={data.color}
           /> 
            );
        })}

        </GoogleMapReact>
      </div>
    );
  }
}

