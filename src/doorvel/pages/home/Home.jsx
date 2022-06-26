import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TypeAnimation from 'react-type-animation';
import "./Home.css";

export default function Home() {
  return (
    // <Box >
    //     <Grid container direction="column" justifyContent="center" alignItems="center" className='profile-container'>
    //         <Grid item className='profile-parent'>
    //             <Typography color="white" fontSize={24} fontFamily="Poppins SemiBold">
    //             {" "}
    //                 Hola, yo soy <span className='highlighted-text'>Jose</span>
    //             </Typography>

    //         </Grid>
    //         <Grid item className='profile-detail-role'>
    //             <Typography fontSize={40} color="white" fontFamily="cursive">

    //                 <TypeAnimation 
    //                     cursor={true}
    //                     repeat={Infinity}
    //                     sequence={[
    //                         "Fullstack Developer ",
    //                         1000,
    //                         "Frontend UX/UI",
    //                         1000,
    //                         "Registered SCRUM Master",
    //                         1000,
    //                     ]}
    //                 />
    //             </Typography>
    //         </Grid>
    //         <Grid item>
    //             <Typography fontSize={19} sx={{margin:'5px 0 0 0'}} fontFamily="Poppins Light" color="white">Estamos haciendo un ejercicio para Doorvel</Typography>
    //         </Grid>
    //         <Grid item>
    //         <Button variant="contained" size="large" >
    //                     <Typography>Más Info</Typography>
    //                 </Button>
    //         </Grid>
    //     </Grid>
    //     <div className='profile-picture'></div>
    // </Box>
    <Grid container direction="row" justifyContent="center" className="bck-header">
        <Grid item sm={8} >
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid item className='profile-parent'>
                    <Typography color="white" fontSize={24} fontFamily="Poppins SemiBold">
                    {" "}
                        Hola, yo soy <span className='highlighted-text'>Jose</span>
                    </Typography>
                </Grid>
                <Grid item className='profile-detail-role'>
                    <Typography fontSize={40} color="white" fontFamily="cursive">

                        <TypeAnimation 
                            cursor={true}
                            repeat={Infinity}
                            sequence={[
                                "Fullstack Developer ",
                                1000,
                                "Frontend UX/UI",
                                1000,
                                "Registered SCRUM Master",
                                1000,
                            ]}
                        />
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography fontSize={19} sx={{margin:'5px 0 0 0'}} fontFamily="Poppins Light" color="white">Estamos haciendo un ejercicio para Doorvel</Typography>
                </Grid>
                <Grid item>
                <Button variant="contained" size="large" >
                            <Typography>Más Info</Typography>
                        </Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item sm={4} className="profile-picture"></Grid>
    </Grid>
    
  )
}
