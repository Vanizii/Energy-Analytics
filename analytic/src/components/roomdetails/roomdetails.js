import React from 'react';
import moment from 'moment';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useParams} from 'react-router-dom';
import {std_fp, datelist} from '../../data';

import DetailCard from './detailcard';

// In der Datei wird die Unterseite Räume verwaltet

ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title
);

function RoomDetails() {
    
    const {id} = useParams();
    const temperatur = <WhatshotIcon style={{fill : "white", height: "90%", width: "90%"}}/>;

    const room = std_fp.rooms.find(obj => { return obj.id = id });
    const room_l = datelist.find(obj => {return obj.id = room.id});

    const numbers = room_l.dates.map(obj => {
        var d = new Date(0);
        d.setUTCSeconds(obj.datetime_start);
        return moment(d).format("DD.MM hh:mm")
    });

    const data = {
        labels: numbers,
        datasets : [{
                label: 'Temperatur',
                data: room_l.dates.map(obj => obj.planned_temp),
                borderColor: '#000000',
                fill: false,
                tension: 0.1
        }]
    };

    return(
        <div style={{
            marginLeft : '220px',
        }}>
            <div>
                <h1>Informationen zu {room.name}</h1>
                <p style={{ mb: 1.5, color: '#4889d7', }}>Alle Wichtigen Informationen auf einen Blick!</p>
            </div>
            <div style={{
                display:'flex',
                flexWrap: 'wrap',
                gap: "10px"
            }}>
                <DetailCard titleImage={temperatur} title="Temperatur">
                    <Line data={data}/>
                </DetailCard>
                <DetailCard titleImage={temperatur} title="Humidität"></DetailCard>
                <DetailCard titleImage={temperatur} title="Energie"></DetailCard>
            </div>
        </div>
    );
}

export default RoomDetails;