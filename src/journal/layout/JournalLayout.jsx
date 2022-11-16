import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { SideBar } from '../components/SideBar';

const drawerWidth = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>

        <Navbar drawerWidth = { drawerWidth } />  
        {/* Sidebar drawerWidth*/}
        <SideBar  drawerWidth={drawerWidth}/>
        <Box 
            component='main'
            sx={{flexGrouw: 1, p:3}}
            >
                <Toolbar></Toolbar>
                {children}
        </Box>
    </Box>
  )
}
