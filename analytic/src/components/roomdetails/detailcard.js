import React from 'react';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';

import './style.css';

const cardSx = {
    width: "32%",
    aspectRatio: "1/0.75",
    transition: "500ms",
    "border-radius" : 15,
};

function DetailCard({titleImage, title, children}) {
    return (
    <Card sx={cardSx} className="ANDetailCard">
        <CardContent className>
            <span className="DCTopRow">
                <div className="DCIconSquare">{titleImage}</div>
                <div className="DCTitle">
                    {title}
                </div>
            </span>
            <Divider/>
            <div>
                {children}
            </div>
        </CardContent>
      </Card>
    );
}
export default DetailCard;