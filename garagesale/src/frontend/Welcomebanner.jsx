import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
function Welcomebanner() {
    return (
      <Card sx={{ maxWidth: 345, my: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Welcome to Garage $ale!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Find Treasures at Local Garage Sales!
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Start Exploring
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  export default Welcomebanner;
  