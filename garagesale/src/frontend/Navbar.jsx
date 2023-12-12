import React from "react";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';



const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Garage $ale
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/sales">Sales</Button>
        <Button color="inherit" href="/about">About</Button>
        <Button color="inherit" href="/signup">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
