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

const root = ReactDOM.createRoot(document.getElementById('root'));

class Homepage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
  }

   drawer = () => {return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )};

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


        <h1>Wilkommen zurück, Marie</h1>
        <h2>Hier sind die wichtigstens Informationen übers Nachhaltigkeitsgymnasium</h2>
        <Button variant="contained">Contained</Button>

        <div class="uebersicht">
          <div class="energieverbrauch">2 kWh/m2a</div>
          <div class="energieersparnis">8 kWh/m2a</div>
          <div class="Geldersparnis">243</div>
        </div>

        <div class="diagramme">
          <div class="energieverbrauchGrafik">2 kWh/m2a</div>
          <div class="jahresziele">8 kWh/m2a</div>
        </div>


        <div class="historie">
          <div>Historie</div>
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
