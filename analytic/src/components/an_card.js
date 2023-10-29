import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import React from 'react';

import "./style.css";

const cardSx = {
    backgroundColor: '#ffffff',
    width: 300,
    height: 140,
    transition: "500ms",
    "border-radius" : 20
};


function ANCard(props) {
    const { wert, text, veraenderung } = props;
    return (
      <Card sx={cardSx} className="ANCard">
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 1.5, fontSize: '28px', fontWeight: 'bold' }}>
            {wert}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {text}
          </Typography>
          <Typography sx={{ mb: 1.5, color: '#4889d7', fontSize: '12px' }} color="text.secondary">
          {veraenderung}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default ANCard;