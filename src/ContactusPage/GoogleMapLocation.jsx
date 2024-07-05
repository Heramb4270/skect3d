import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, onClick }) => (
  <div onClick={onClick} style={{ cursor: 'pointer' }}>
    {text}
  </div>
);

const GoogleMapLocation = ({ apiKey }) => {
  const defaultProps = {
    center: {
      lat: 19.9975,  // Updated Latitude for Sagar Sweets, Gangapur, Nashik
      lng: 73.7898  // Updated Longitude for Sagar Sweets, Gangapur, Nashik
    },
    zoom: 15
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=19.9975,73.7898', '_blank');
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '100%' }} onClick={handleMapClick}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={19.9975}
          lng={73.7898}
          text="Office Location"
          onClick={handleMapClick}
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapLocation;