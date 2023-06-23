import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./mapView.scss";
import { useSelector } from "react-redux";
import axios from "axios";

const MapView = () => {
  const { users } = useSelector((state) => state.UsersState);
  const [userLocations, setUserLocations] = useState([]);

  const UserLocation = ({ text }) => {
    return (
      <div className="user-icon">
        <p className="user-name">{text}</p>
        <i className="fa fa-location-dot"></i>
      </div>
    );
  };

  const defaultProps = {
    zoom: 3,
    center: {
      lat: 11.65212,
      lng: 78.157982,
    },
  };

  const getGeocodes = async (pin, username) => {
    let url = `http://api.geonames.org/postalCodeSearchJSON?postalcode=${pin}&country=&username=myname`;
    const { data } = await axios.get(url);
    let latitude = data.postalCodes[0].lat;
    let longitude = data.postalCodes[0].lng;

    setUserLocations((prevState) => [
      ...prevState,
      { lat: latitude, lng: longitude },
    ]);
  };

  useEffect(() => {
    users.forEach((user) => {
      getGeocodes(user.postalCode, user.firstname);
    });
  }, [users]);

  return (
    <GoogleMapReact
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
      center={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {userLocations.map((location, index) => {
        return (
          <UserLocation
            key={index}
            lat={location.lat}
            lng={location.lng}
            // text="test"
            text={
              users.length > index
                ? `${users[index].firstname} ${users[index].lastname}`
                : "user"
            }
          />
        );
      })}
    </GoogleMapReact>
  );
};

export default MapView;
