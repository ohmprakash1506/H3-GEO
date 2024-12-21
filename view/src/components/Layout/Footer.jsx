import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        textAlign: 'center',
        py: 2,
        mt: 'auto', // Ensure the footer aligns correctly at the bottom
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Adloggs. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
