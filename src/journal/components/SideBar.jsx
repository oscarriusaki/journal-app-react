import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth} , flexShrink: {sm: 0}}}
    >
        <Drawer 
            variant='permanent' // temporaly
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper':{ boxSizing: 'border-box', width:drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component="div">
                    Oscar Laura
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'LoremEiusmod dolore id commodo nisi ut esse ex voluptate deserunt aliquip qui.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
