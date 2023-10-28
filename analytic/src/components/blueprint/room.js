import React from 'react';
import "./room_styles.css";

function getColorClass(temp) {
    switch(temp) {
        case 15 : return "t15";
        case 16 : return "t16";
        case 17 : return "t17";
        case 18 : return "t18";
        case 19 : return "t19";
        case 20 : return "t20";
        case 21 : return "t21";
        case 22 : return "t22";
        case 23 : return "t23";
        case 24 : return "t24";
        default : return "";
    };
}

function Room({roomData, index}) {

    return(
        <a href={"rooms/" + roomData.name} class={"room " + getColorClass(roomData.temp)}>
        <polygon
            key={index}
            points={roomData.points.map(point => `${point.x},${point.y}`).join(' ')}
            />
        </a>
    )
}
export default Room;