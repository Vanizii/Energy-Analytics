import React from 'react';

import './index.css';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../assets/logo.png'

function drawer() {
    return (
        <div>
            <Toolbar className="logoBox">
                <img src={logo} className="logoIcon" alt="the EnergyAnalytics logo"/>
                <div className="logoName">EnergyAnalytics</div>
            </Toolbar>
            <Divider />
            <List>
                {[
                    { text: 'Dashboard', icon: <DashboardIcon />, link:"/dashboard" },
                    { text: 'Grundriss', icon: <HomeIcon />, link:"/grundriss"  },
                    { text: 'Räume', icon: <SensorDoorIcon /> },
                    { text: 'Nutzer', icon: <PersonIcon /> },
                    { text: 'Settings', icon: <SettingsIcon /> },
                ].map(({ text, icon, link }, index) => (
                    <a href={link}>
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    </a>
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

const Layout = ({ children}) => {
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "200px" },
                }}
                open
            >{drawer()} </Drawer>
            <div><main>{children}</main></div>
        </>
    );
}

export default Layout;