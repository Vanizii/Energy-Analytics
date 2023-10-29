import React from 'react';

import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostat';
import Chip from "@mui/material/Chip";
import Tooltip from '@mui/material/Tooltip';

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

//Diese hässliche art, das zu stylen ist die einzige, die allen Anforderungen gerecht wurde
function RoomTooltip({name, temp}) {
    return (
        <div>
            <h1>{name}</h1>
            <Chip 
                icon={<DeviceThermostatOutlinedIcon
                style={{
                    fill : "white"}}/>
                }
                label={temp +"°C"}
                style={{color: "white"}}
            />
        </div>
    );
}

function Room({roomData, index}) {
    return(
            <a href={"raum/" + roomData.id + ""} class={"room " + getColorClass(roomData.temp)}>
                <Tooltip classname="tempLabel" title={<RoomTooltip name={roomData.name} temp={roomData.temp}/>} followCursor>    
                    <polygon
                        key={index}
                        points={roomData.points.map(point => `${point.x},${point.y}`).join(' ')}
                        />
                </Tooltip>
            </a>
    )
}
export default Room;