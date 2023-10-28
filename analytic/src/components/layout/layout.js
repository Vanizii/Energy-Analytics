import React from 'react';
import './index.css';
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


function drawer() {
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

const Layout = ({ children, title }) => {
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "200px" },
                }}
                open
            > {drawer()} </Drawer>

            <div style={{ marginLeft: '220px' }}>
                <div style={{ marginLeft: '220px' }}>
                    <h1>{title}</h1>
                    <p style={{ mb: 1.5, color: '#4889d7', }}>Hier sind die wichtigstens Informationen übers Nachhaltigkeitsgymnasium</p>
                </div>

                <div>
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
}

export default Layout;