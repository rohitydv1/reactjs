import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    backgroundImage: "url(./images/banner/bg.png)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    padding: "150px 0px 50px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]:{
      height: "auto",
    },
  },
  bannerimages: {
    display: "flex",
    position: "relative",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
    "& figure": {
      height: "auto",
      marginLeft: "20px",
      marginBottom: "20px",
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        width: "150px",
        overflow: "inherit",
      },
      "& img": {
        transition: "02s",
        [theme.breakpoints.down("xs")]: {
          width: "100%",
        },
      },
      "&:hover": {
        "& img": {
          transform: "scale(1.1)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
      },
    },
  },
  gridflex: {
    display: "flex",
    alignItems: "center",
    height:"70vh",
    [theme.breakpoints.down("md")]:{
      height: "auto",
    },
  },
  marginleft: {
    marginLeft: "10px !important",
  },
  textbox: {
    "& h1": {
      fontSize: "50px",
      fontWeight: "600",
      color: "#300760",
      [theme.breakpoints.down("lg")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
      "&:hover":{

      },
    },
    "& p": {
      fontSize: "16px",
      marginTop: "20px",
    },
  },
  image2: {
    marginLeft: "-20px !important",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px !important",
    },
  },
  buttonright: {
    marginLeft: "10px !important",
    minWidth: "150px",
  },
  minth1:{
    fontFamily: "Italianno",
    fontSize: "80px !important",
    fontWeight: "100t",
    lineHeight: "80px",
    [theme.breakpoints.down("xs")]:{
      fontSize: "50px !important",
    },
    "@media (max-width:768px)":{
      fontSize: "50px !important",
    },
    "@media (max-width:767px)":{
      fontSize: "30px !important",
    },
  },
}));

export default function BestSeller() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Box className="round1">
      </Box>
      <Box className="round3"></Box>
      <Box className="round4"></Box>
      <div className="bigRound"></div>
      <img src="images/banner/1.png" className="bannerimg1" alt="" />
      <img src="images/banner/2.png" className="bannerimg2" alt="" />
      <Container>
      <h1  className="heading1">MetaArts </h1>
        <Grid container spacing={3}>
          
          <Grid item xs={12} md={6} className={classes.gridflex}>
            <Box className="textbox">
            
              <Typography variant="h1" >
           <span >   Multi-chain NFT  </span><span > Marketplace</span>
              </Typography>
              <Typography variant="body1">
              One-stop solution for the users to trade on various blockchains like Ethereum, Polygon, Binance Smart Chain, Solana, Cardano.
              </Typography>
              <Box mt={3}>
                <Button variant="contained" size="large" color="secondary" target="_blank" href="https://opensea2.mobiloitte.org/">
                  Marketplace
                </Button>
                <Button variant="contained" size="large" color="primary" component={Link} to="/mint" className={classes.buttonright}>
                  Mint
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


