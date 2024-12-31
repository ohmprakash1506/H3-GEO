import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import OpenStreetMaps from "../MainMap/OpenStreetMaps";

// UI library
import { Button } from "@mui/material";

// Redux slices
import { useGetH3IndexQuery } from "../../redux/features/h3Slice";
import { setMapState, clearMapState, setSubmitState } from "../../redux/features/mapSlice";

import { cellToLatLng, cellToBoundary } from "h3-js";

const Map = () => {
  const dispatch = useDispatch();
  const mapState = useSelector((state) => state.map);
  const { lat, lng, resolution } = mapState;

  const { data: h3 } = useGetH3IndexQuery(
    { lat, lng, resolution },
    { skip: !mapState }
  );
  console.log(`hh3:`, h3);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setMapState({ ...mapState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setMapState(mapState));
    dispatch(setSubmitState({ submit: true }));
  };

  const handleClear = () => {
    dispatch(clearMapState());
  };

  const center = h3?.response ? cellToLatLng(h3.response) : null;
  const boundary = h3?.response ? cellToBoundary(h3.response) : [];

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Map Component */}
      <OpenStreetMaps center={center} boundary={boundary} />

      {/* Overlay Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.9)", // Transparent background
          borderRadius: "8px",
          padding: "10px 20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000, // Ensure the form is above the map
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label>
            lat:
            <input
              type="text"
              name="lat"
              value={mapState.lat}
              onChange={handleChange}
              style={{
                marginLeft: "0.5rem",
                padding: "0.3rem 0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              placeholder="Enter lat"
              required
            />
          </label>

          <label>
            lng:
            <input
              type="text"
              name="lng"
              value={mapState.lng}
              onChange={handleChange}
              style={{
                marginLeft: "0.5rem",
                padding: "0.3rem 0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              placeholder="Enter lng"
              required
            />
          </label>

          <label>
            Resolution:
            <input
              type="text"
              name="resolution"
              value={mapState.resolution}
              onChange={handleChange}
              style={{
                marginLeft: "0.5rem",
                padding: "0.3rem 0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              placeholder="Enter resolution"
              required
            />
          </label>

          <Button
            variant="contained"
            type="submit"
            style={{ padding: "0.4rem 1rem" }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={handleClear}
            style={{ padding: "0.4rem 1rem" }}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Map;
