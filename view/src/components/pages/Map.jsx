import React, { useState } from "react";
import { Button } from "@mui/material";
import OpenStreetMap from "../openstreetMap/OpenStreetMap";

const Map = () => {
  const [input, setInput] = useState({
    latitude: "",
    longitude: "",
    resolution: "",
  });

  const handleChange = (event) => {    
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Inputs:`, input);
  };

  const handleClear = () => {
    setInput({
        latitude: "",
        longitude:"",
        resolution:"",
    })
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem", // Adds horizontal spacing between input fields
          }}
        >
          <label>
            Latitude:
            <input
              type="text"
              name="latitude"
              value={input.latitude}
              onChange={handleChange}
              style={{ marginLeft: "1rem", padding: "0.5rem" }}
              placeholder="Enter latitude"
              required
            />
          </label>

          <label>
            Longitude:
            <input
              type="text"
              name="longitude"
              value={input.longitude}
              onChange={handleChange}
              style={{ marginLeft: "1rem", padding: "0.5rem" }}
              placeholder="Enter longitude"
              required
            />
          </label>

          <label>
            Resolution:
            <input
              type="text"
              name="resolution"
              value={input.resolution}
              onChange={handleChange}
              style={{ marginLeft: "1rem", padding: "0.5rem" }}
              placeholder="Enter resolution"
              required
            />
          </label>

          <Button
          variant="contained"
          type="submit"
          style={{
            marginLeft: "2rem",
            padding: "0.5rem 1rem",
          }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={handleClear}
          style={{
            marginLeft: "2rem",
            padding: "0.5rem 1rem",
          }}
        >
          Clear
        </Button>
        </div>
      </form>

      <div style={
        {
          marginTop: "2rem",
        }
      }>
        <OpenStreetMap/>
      </div>
    </div>
  );
};

export default Map;
