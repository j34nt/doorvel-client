import { Home, HomeMaxOutlined, InterestsRounded } from '@mui/icons-material';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Fade } from '@mui/material';
import React from 'react'
import { Link } from 'react-scroll';
import "./Menu.css";

export const Menu = ({drawerWidth, menuOpen, setMenuOpen}) => {
  return (
    <Box component="nav" sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}>
        
            <Drawer anchor='right' variant="permanent" open={menuOpen} sx={{
                
                display:{xs:'block'},
                '& .MuiDrawer-paper': {backgroundColor:'primary.main',color:'white',boxSizing:'border-box', width: drawerWidth, right:0}
            }}>
                <List>
            <ListItem sx={{width:'100%'}}>
                <Link to="intro" smooth={true} duration={500} offset={-100}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Home color="white"/>
                        </ListItemIcon>
                            <ListItemText>Header</ListItemText>
                    </ListItemButton>
                </Link>
                
            </ListItem>
            <ListItem sx={{width:'100%'}}>
                <Link to="parent" smooth={true} duration={500} offset={-100}>
                    <ListItemButton >
                        <ListItemIcon color="white">
                            <InterestsRounded/>
                        </ListItemIcon>
                        <ListItemText>Amenidades</ListItemText>
                    </ListItemButton>

                </Link>
                
            </ListItem>
            <ListItem sx={{width:'100%'}}>
                <Link to="message" smooth={true} duration={500} offset={-100}>
                    <ListItemButton >
                        <ListItemIcon color="white">
                            <InterestsRounded/>
                        </ListItemIcon>
                        <ListItemText>Mensaje</ListItemText>
                    </ListItemButton>

                </Link>
                
            </ListItem>
        </List>
            </Drawer>


    </Box>
    
  )
}
