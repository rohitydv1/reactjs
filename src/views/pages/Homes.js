import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#040C26",
      
    height: "auto",
    width: "100%",
    backgroundImage: 'url("images/bg.png")',
    backgroundRepeat: "no-repeat",
    // backgroundSize:"cover",
    paddingBottom:"120px",
    backgroundPosition:"center"
  },
  Typ1: {
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: "55px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  Typ2: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "20px",
    color: "#898CA9",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  btn:{
    background: "linear-gradient(180deg, #6BE3F2 0%, #467DDB 100%)",
    color:"#fff",
    fontFamily:"Lato",
    fontWeight:"100",
    fontSize:"16px",
    borderRadius:"100px",
    marginTop:"30px",
    padding:"10px 30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      padding:"8px 25px"
    },
  },
  high:{
      paddingTop:"200px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "160px",
    },
    [theme.breakpoints.down("sm")]: {
      fpaddingTop: "160px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "130px",
    },

  }
}));

export default function Homes() {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <Container maxWidth="lg">
        <Grid container className={classes.high}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography className={classes.Typ1}>
              TRUSTED BITCOIN & CRYPTOCURRENCY EXCHANGE
            </Typography>
            <Typography className={classes.Typ2}>
              Buy, sell, and grow your crypto with Crypto,the platform dedicated
              to every trader at every level.
            </Typography>
            <Button className={classes.btn}>
            Get Started
            </Button>
          </Grid>
          <Grid item md={6} lg={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
