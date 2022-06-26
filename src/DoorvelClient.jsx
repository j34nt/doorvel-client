import React, { useEffect, useState } from 'react';
import { Grid, SwipeableDrawer } from '@mui/material';
import { Intro, Menu, Parent, TopBar } from './doorvel/components';
import Home from './doorvel/pages/home/Home';
import { AppTheme } from './theme/AppTheme';
import { Message } from './doorvel/components/message/Message';

// const drawerWidth = 240;
export const DoorvelClient = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [drawerWidth, setDrawerWidth] = useState(240);
    useEffect(() => {
      setDrawerWidth(
        menuOpen == true ? 300 : 0
      )
    }, [menuOpen])
    
    return (
        <AppTheme>
            <Grid container direction="row" justifyContent="space-between">
                <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} drawerWidth={drawerWidth}></TopBar>
                {/* <SwipeableDrawer open={menuOpen} anchor="right" disableSwipeToOpen={false}
        > */}
                    <Menu drawerWidth={drawerWidth} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                {/* </SwipeableDrawer> */}

            </Grid>

            <Grid container direction="column" justifyContent="center" alignItems="center" sx={{
                // height:'calc(100vh - 70px)',
                top:'64px',
                position:'relative',
                scrollBehavior:'smooth',
                width:{sm:`calc(100% - ${drawerWidth}px)`}
            }}>
                <Intro></Intro>
                <Parent></Parent>
                <Message></Message>
            </Grid>
        </AppTheme>
    )
}