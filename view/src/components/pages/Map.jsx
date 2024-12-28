import React, { useState } from "react";
import OpenStreetMaps from "../MainMap/OpenStreetMaps";
import { Button } from "@mui/material";
import { useGetH3IndexQuery } from "../../redux/features/h3Slice";
import { cellToLatLng, cellToBoundary } from "h3-js";

const Map = () => {
  const [input, setInput] = useState({
    lat: "",
    lng: "",
    resolution: "",
  });

  const [submit, setSubmit] = useState(false);
  const {
    data: h3,
    isLoading,
    error,
  } = useGetH3IndexQuery(input, { skip: !submit });
  console.log(`data:`, h3);

  // if(error) return <h1>Error from api</h1>
  // if(isLoading) return <h1>Loading...</h1>

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
    setSubmit(true);
  };

  const handleClear = () => {
    setInput({
      lat: "",
      lng: "",
      resolution: "",
    });
  };

  const center = h3?.response ? cellToLatLng(h3.response) : null ;
  const boundary = h3?.response ? cellToBoundary(h3.response) : [] ;

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
            lat:
            <input
              type="text"
              name="lat"
              value={input.lat}
              onChange={handleChange}
              style={{ marginLeft: "1rem", padding: "0.5rem" }}
              placeholder="Enter lat"
              required
            />
          </label>

          <label>
            lng:
            <input
              type="text"
              name="lng"
              value={input.lng}
              onChange={handleChange}
              style={{ marginLeft: "1rem", padding: "0.5rem" }}
              placeholder="Enter lng"
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

      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <OpenStreetMaps center={center} boundary={boundary}/>
      </div>
    </div>
  );
};

export default Map;
