import { styled } from '@mui/system';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CustomCard = styled(Card)({
  maxWidth: 345,
  marginY: 2, // shorthand for marginTop and marginBottom
});

const CustomButton = styled(Button)({
  marginTop: 2,
});

function Welcomebanner() {
  return (
    <CustomCard>
      <CardContent>
        Welcome!
        <CustomButton variant="contained" color="primary">
          Start Exploring
        </CustomButton>
      </CardContent>
    </CustomCard>
  );
}

export default Welcomebanner;

  