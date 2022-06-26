import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Mail, Person } from "@mui/icons-material";
import { Link } from "react-scroll";
import "./TopBar.css";
import logo from "../../../assets/images/DOORVEL-LOGO.png";
import logoT from "../../../assets/images/DOORVEL-LOGOS-03.png";

// const active = true;
export const TopBar = ({menuOpen, setMenuOpen, drawerWidth}) => {
  return (
    <AppBar position="fixed" sx={{
      width:{sm:`calc(100% - ${drawerWidth}px)`},
      mr:{sm:`${drawerWidth}px`}
    }} className={("top-bar" + (menuOpen ? " active" : ""))}>

      <Toolbar>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item >
            <Grid container direction="row" alignItems="center" className={"info-detail" + (menuOpen ? " active" : "")}>
              <Link to="intro" smooth={true} duration={500} offset={-100}>
                {/* <Typography>LOGO</Typography> */}
                <img src={menuOpen ? logoT : logo}  height={50} alt="Doorvel Logo" />
              </Link>
              <Person className="icon-bar"/>
              <Typography className="text-bar">+52 8125212084</Typography>
              <Mail className="icon-bar"/>
              <Typography className="text-bar">jajeantp@gmail.com</Typography>


            </Grid>

          </Grid>
          <Grid item  onClick={() => setMenuOpen(!menuOpen)}>
            <div className={"hamburguer" + (menuOpen ? " active":"")}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
            {/* <Typography color="secondary.main" variant="h4">Jose Jeanton</Typography> */}
          </Grid>

        </Grid>

      </Toolbar>
    </AppBar>
  )
}
