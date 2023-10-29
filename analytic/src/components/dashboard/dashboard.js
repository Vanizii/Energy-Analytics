import React from 'react';

import Button from "@mui/material/Button"

import ANCard from '../an_card'

import meinBild from '../../assets/diagramm.png';



// Datei zum darstellen des Dashboards
function Dashboard() {
    return (

        // Rechts wird ein Rand gelassen, damit das Dashboard nicht von der Sidebar verdeckt wird
        <div style={{marginLeft: '220px'}}>
            {/**Überschrift und Begrüßung*/}
            <div>
                <h1>Willkommen, Louise</h1>
                <p style={{ mb: 1.5, color: '#4889d7', }}>Alle Wichtigen Informationen auf einen Blick!</p>
            </div>

            {/**Übersichtskacheln für Energieverbrauch, Energieeinsparung und Geldersparnis werden als ANCard dargestellt*/}
            <div class="uebersicht">
                <ANCard wert="2 kWh/m²*a" text="Energieverbrauch" veraenderung="10.2 +1.01% diese Woche" />
                <ANCard wert="8 kWh/m²" text="Energiersparnis" veraenderung="3.1 +0.49% dieses Jahr" />
                <ANCard wert="243" text="Geldersparnis" veraenderung="2.56 +9,5% dieses Jahr" />
            </div>
            
            <div class="diagramme">
                {/*<div class="energieverbrauchGrafik">2 kWh/m2a</div>
                <div class="jahresziele">8 kWh/m2a</div>*/}
                <img src={meinBild} alt="Beschreibung des Bildes" style={{width: '63%', height: 'auto'}} />
            </div>


            <div class="historie">
                <div>Historie</div>
            </div>
        </div>
    );
}

export default Dashboard;