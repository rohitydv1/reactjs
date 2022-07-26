import React from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: 'url("images/bjp.png")',
    height: "auto",
    width: "100%",
    backgroundSize: "cover",
    paddingBottom: "50px",
    backgroundColor: "#040C26",
  },
  typ1: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "60px",

    
    background: "linear-gradient(180deg, #68DAF0 0%, #4B8ADE 100%)",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    paddingLeft:"40px",
    paddingTop:"100px",
    [theme.breakpoints.down("sm")]:{
        fontSize: "40px",

      },
      [theme.breakpoints.down("xs")]:{
        fontSize: "40px",
        paddingTop:"13px",
      },
  },
  typ3: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "60px",

    
    background: "linear-gradient(180deg, #68DAF0 0%, #4B8ADE 100%)",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    lineHeight:"1",
    paddingLeft:"80px",
    [theme.breakpoints.down("sm")]:{
        fontSize: "40px",
      
  
      },
      [theme.breakpoints.down("xs")]:{
        fontSize: "35px",
  
      },
  },
  typ2: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "90px",
    color:"#D0A563",
    paddingLeft:"150px",
    [theme.breakpoints.down("sm")]:{
        fontSize: "70px",
  
      },
      [theme.breakpoints.down("xs")]:{
        fontSize: "50px",
  
      },

    
   
  },
  typ12: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "35px",

    
    background: "linear-gradient(180deg, #68DAF0 0%, #4B8ADE 100%)",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    paddingLeft:"40px",
    paddingTop:"190px",
    [theme.breakpoints.down("md")]:{
        paddingTop:"0px",
        textAlign:"center",
        fontSize:"30px",
      },
      [theme.breakpoints.down("sm")]:{
        fontSize: "26px",
  
      },

  },
}));

export default function Level2() {
  const classes = useStyles();

  return (
    <Box className={classes.bg}>
      <Container>
        <Box>
          <Grid container style={{ paddingTop: "100px" }}>
            <Grid item sm={12} md={12} lg={7}>
              <Box>
                <Grid container>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                  <img src="images/toy.png" alt="" width='90%' />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Typography className={classes.typ1}>CRYPTO</Typography>
                    <Typography className={classes.typ3}>TRADING</Typography>
                    <Typography className={classes.typ2}>BOT</Typography>
                  </Grid>
                  
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}>
            <Typography className={classes.typ12}>COMING SOON</Typography>
            </Grid>
          </Grid>
        </Box>
      <Box>

     

      </Box>


      </Container>
    </Box>
  );
}
