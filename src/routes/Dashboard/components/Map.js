import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyBa0WKd3E8Mr6mB7YMAdsBy720m9w-FvG8'};
const beach = '../../../static/logo/facebook.png';

export class Map extends React.Component {
  constructor(){
    super()
    this.state = {
      lat: null,
      lng: null,
      address:''
    }
    this.onMapCreated = this.onMapCreated.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onMapCreated(map) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude:lat, longitude:lng} = position.coords;
        map.setCenter({lat, lng});
        this.setState({lat, lng})
      });
    }
  }

  onDragEnd(e) {
    event.preventDefault();
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    this.props.fetchAddress(lat, lng, params.key)
    this.setState({lat, lng})
  }

  render() {
    const {lat, lng} = this.state;
    const pointer = require('../../../static/logo/Combined_Shape_Copy.svg');
    return (
      <div style={{height:'600px'}}>
        <Gmaps
          width={'100%'}
          height={'80%'}
          lat={0}
          lng={0}
          zoom={12}
          onMapCreated={this.onMapCreated}>
          <Marker
            style={{backgroundColor:'blue'}}
            lat={lat}
            lng={lng}
            draggable={true}
            onDragEnd={this.onDragEnd}
            icon={pointer}
            />
        </Gmaps>
      </div>
    );
  }
};

export default Map
