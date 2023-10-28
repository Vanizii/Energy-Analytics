import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';

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

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Funktionale Komponente für die Karte
function MyCard(props) {

  const { wert, text, veraenderung } = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {wert}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {text}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
          <h2>Hier sind die wichtigstens Informationen übers Nachhaltigkeitsgymnasium</h2>
          <Button variant="contained">Contained</Button>

          <div class="uebersicht">
            <div class="energieverbrauch">2 kWh/m2a</div>
            <div class="energieersparnis">8 kWh/m2a</div>
            <div class="Geldersparnis">243</div>
            <div>
            <MyCard wert="Karte 1" text="Inhalt für Karte 1" veraenderung="200" />
            </div>
          </div>

          <div class="diagramme">
            <div class="energieverbrauchGrafik">2 kWh/m2a</div>
            <div class="jahresziele">8 kWh/m2a</div>
          </div>


          <div class="historie">
            <div>Historie</div>
          </div>
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
