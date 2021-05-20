import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
} from "@react-google-maps/api";

const Map = ({ areas, toggle, setSelected }) => {
    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({
      lat: 30.684588,
      lng: 70.544543,
    });
  
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyCiLEhMjQ1k6FQ8eogPKG09zIqVp8ire2M",
    });
  
    const onLoad = useCallback((map) => {
      setMap(map);
    }, []);
  
    const onUnmount = useCallback(() => {
      setMap(null);
    }, []);
  
    return isLoaded ? (
      <GoogleMap
        clickableIcons={false}
        mapContainerStyle={{
          width: "1000px",
          height: "600px",
        }}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          mapTypeControl: true,
          zoomControl: false,
          rotateControl: false,
          streetViewControl: false,
        }}
      >
        {toggle ? (
          areas.map((item) => (
            <Marker
              label={item.name}
              position={item.coordinates[0]}
              onClick={() => {
                setSelected(item);
              }}
            />
          ))
        ) : (
          <Polygon
            options={{
              fillColor: "green",
              fillOpacity: 0.4,
              strokeColor: "blue",
              strokeOpacity: 0.3,
              strokeWeight: 2,
              clickable: false,
              draggable: false,
              editable: false,
              geodesic: false,
              zIndex: 1,
            }}
            paths={
                areas
                ? areas?.map(({coordinates}) => {
                    return coordinates;
                  })
                : []
            }
          />
        )}
      </GoogleMap>
    ) : (
      <></>
    );
  };
  
  export default Map;
  