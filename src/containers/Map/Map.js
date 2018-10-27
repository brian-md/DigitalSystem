import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { MapWrapper } from './Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
AnyReactComponent.propTypes = {
  text: PropTypes.string,
};
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 41.932435,
      lng: -87.665932,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <MapWrapper style={this.props.style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBULpOdPqvTRSxwshkilGbPScQEmjphl4s' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.932435}
            lng={-87.665932}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </MapWrapper>
    );
  }

  static propTypes = {
    text: PropTypes.string,
    center: PropTypes.object,
    zoom: PropTypes.number,
    style: PropTypes.object,
  };
}

export { Map };
