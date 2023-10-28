import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';

import logo from './logo.svg';

// Eventuel zu viel

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Bar, Line } from 'react-chartjs-2';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import { Chart } from 'chart.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Funktionale Komponente für die Karte
function MyCard(props) {

  const { wert, text, veraenderung } = props;

  return (
    <Card sx={{ backgroundColor: '#ffffff', width: 300, height: 140 }}>
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

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      energieverbrauch: "2 kWh/m²a",
      eneregieersparnis: "8 kWh/m²",
      geldersparnis: 243};
  }

  drawer = () => {
    return (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: 'Grundriss', icon: <HomeIcon /> },
            { text: 'Kalender', icon: <CalendarMonthIcon /> },
            { text: 'Räume', icon: <SensorDoorIcon /> },
            { text: 'Nutzer', icon: <PersonIcon /> },
            { text: 'Settings', icon: <SettingsIcon /> },
          ].map(({ text, icon }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: 'Kontakt', icon: <ChatIcon /> },
            { text: 'Logout', icon: <LogoutIcon /> },
          ].map(({ text, icon }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    )
  };

  // HTML Rendern
  render() {
    return (
      <div>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "200px" },
          }}
          open
        >{this.drawer()}</Drawer>

        <div style={{ marginLeft: '220px' }}>
          <h1>Wilkommen zurück, Marie</h1>
          <p style={{ mb: 1.5, color: '#4889d7', }}>Hier sind die wichtigstens Informationen übers Nachhaltigkeitsgymnasium</p>
          

          <div class="uebersicht">
            <MyCard wert="2 kWh/m²*a" text="Energieverbrauch" veraenderung="10.2 +1.01% diese Woche" />
            <MyCard wert="8 kWh/m²" text="Energiersparnis" veraenderung="3.1 +0.49% dieses Jahr" />
            <MyCard wert="243" text="Geldersparnis" veraenderung="2.56 +9,5% dieses Jahr" />
          </div>

          <div class="diagramme">
            <div class="energieverbrauchGrafik">2 kWh/m2a</div>
            <div class="jahresziele">8 kWh/m2a</div>
          </div>


          <div class="historie">
            <div>Historie</div>
          </div>
          <Button variant="contained">Contained</Button>
          
        </div>
      </div>
    );
  }

}
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
