import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const tabMapping = ["/home", "/map"];
  const tabIndex = tabMapping.indexOf(location.pathname)
  const [value, setValue] = useState(tabIndex !== -1 ? tabIndex : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" component={Link} to="/home"/>
        <Tab label="Map" component={Link} to="/map"/>
      </Tabs>
    </Box>
  );
};

export default Navbar;
