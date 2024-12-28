import React, { useEffect } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Anchor point
  popupAnchor: [1, -34], // Popup point
});

L.Marker.prototype.options.icon = defaultIcon;

// Component to zoom to marker center
const CenterMapOnMarker = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center && Array.isArray(center) && center.length === 2) {
      map.setView(center, 10); // Adjust zoom level as needed
    }
  }, [center, map]);

  return null; // This component doesn't render anything
};

const OpenStreetMaps = ({ center, boundary }) => {
  console.log(`center:`, center);
  console.log(`Boundary:`, boundary);

  return (
    <div style={{ height: "500px", width: "80%", margin: "auto" }}>
      <MapContainer
        center={center ? center : [20.5937, 78.9629]} // Default to India coordinates
        zoom={center ? 13 : 5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {boundary.length > 0 && (
          <Polygon positions={boundary} color="blue" fillOpacity={0.4} />
        )}
        {center && Array.isArray(center) && center.length === 2 && (
          <>
            <Marker position={center}>
              <Popup>Center of H3 Index</Popup>
            </Marker>
            <CenterMapOnMarker center={center} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default OpenStreetMaps;
