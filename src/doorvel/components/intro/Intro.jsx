import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TypeAnimation from 'react-type-animation';
import React from 'react'
import { DownhillSkiingOutlined, KeyboardArrowDown  } from '@mui/icons-material';
import { Link } from 'react-scroll';
import "./Intro.css";
import photo from "../../../assets/images/photoPort-1.png"

export const Intro = () => {
  return (
    <Grid id="intro" item sx={{
      width:'100%',
      height:'calc(100vh - 64px)',
      // backgroundColor:'lightcoral'
    }}>
      
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height:"100%"}}>
        <Grid item sm={6} alignItems="center" justifyContent="center">
          <div className='img-container'>
            <img sx={{marginTop:'120px'}} src={photo}></img> 

          </div>
          {/* <Box clasName="imgContainer">
            <span>Test</span>
          </Box> */}

        </Grid>
        <Grid item sm={6} color="primary.main">

          <Typography variant="h3" fontWeight="bold">Hola, Yo soy</Typography>
          <Typography variant="h2" fontWeight="bold">Jose Jeanton</Typography>
          <Grid container direction="row" alignItems="center">
            <Typography variant="h5" fontWeight="bold">Trabajo como: </Typography>
            <Typography variant="h5" fontWeight="bold" color="secondary" sx={{ml:'5px'}}>
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
          <Button size="large" sx={{marginTop:'10px', width:'100%'}}>
            <Link to="parent" smooth={true} duration={500} offset={-100}>
              <KeyboardArrowDown  sx={{fontSize:75}}/>
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
