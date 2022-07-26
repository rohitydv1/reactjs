import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Slider from './Slider'

const useStyles = makeStyles((theme) => ({
  bg: {
    background:
      "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 100%, rgba(255, 255, 255, 0) 100%)",
    boxShadow: "0px 0px 53px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(42px)",
    borderRadius: "10px",
    padding: "25px",
  },
  typ1: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "30px",
    textAlign: "center",
    color: "#fff",
  },
  typ2: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "12px",
    textAlign: "center",
    color: "#9D9D9D",
  },
  border: {
    borderLeft: "1px solid #5A5A5A",
    [theme.breakpoints.down("md")]: {
      borderLeft: "none",
      borderTop: "1px solid #5A5A5A",
    },
  },
  border1: {
    borderLeft: "1px solid #5A5A5A",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "none",
      borderTop: "1px solid #5A5A5A",
    },
  },
  border2: {
    borderLeft: "1px solid #5A5A5A",
    [theme.breakpoints.down("md")]: {
      borderLeft: "1px solid #5A5A5A",
      borderTop: "1px solid #5A5A5A",
    },
    [theme.breakpoints.down("sm")]: {
      borderLeft: "none",
      borderTop: "1px solid #5A5A5A",
    },
  },
  typ11:{
      fontFamily:"Poppins",
      fontWeight:"700",
      fontSize:"40px",
      color:"#fff",
      [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "27px",
    },
  },
  typ22: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "12px",
    
    
    color: "#fff",
    display: 'flex',
    alignItems: 'center'
  },

  
}));

export default function Level2() {
  const classes = useStyles();

  return (
    <Box style={{ backgroundColor: "#040C26", height: "auto" }}>
      <Container>
        <Box>
          <Box className={classes.bg}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Typography className={classes.typ1}>$4.27</Typography>
                <Typography className={classes.typ2}>Copy Trading</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3} className={classes.border1}>
                <Typography className={classes.typ1}>$4.27</Typography>
                <Typography className={classes.typ2}>Copy Trading</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3} className={classes.border}>
                <Typography className={classes.typ1}>$4.27</Typography>
                <Typography className={classes.typ2}>Copy Trading</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3} className={classes.border2}>
                <Typography className={classes.typ1}>$4.27</Typography>
                <Typography className={classes.typ2}>Copy Trading</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box style={{display:"flex", justifyContent:"space-between",marginTop:"70px"}} >
                <Typography className={classes.typ11}> 
                Active
                </Typography>
                
                <Link style={{cursor:"pointer"}} className={classes.typ22}> 
                More >
                </Link>


          </Box>
          <Box>
          <Slider/>
          </Box>



        </Box>
      </Container>
    </Box>
  );
}
