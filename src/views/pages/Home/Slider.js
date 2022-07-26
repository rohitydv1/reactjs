import React from "react";
import {
  Container,
  Typography,
  Box,
  makeStyles,
  Grid,
  Button,
  Link,
} from "@material-ui/core";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    padding: "30px 0 80px",
    "& .vectorImgleft": {
      position: "absolute",
      bottom: "0",
      left: 0,
    },
  },

  card: {
    // marginTop: "1rem",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    display: "flex",
    justifyContent: "center",

    // height: "150px",
    width: "95%",
    background:
      "linear-gradient(180deg, rgba(12, 169, 203, 0.3) 0%, rgba(196, 196, 196, 0) 100%)",
  },
  bgpartner1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& h1": {
      color: " #071426",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "100px",
      lineHeight: "76px",

      textAlign: "center",
      textShadow: " 3px 3px 3px #0CA9CB",
      background: "transparent",
      "@media(max-width:480px)": {
        fontSize: "40px",
      },
    },
  },
  bgpartner2: {
    marginTop: "-3rem",
    "& h2": {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "50px",
      lineHeight: "76px",
      textAlign: "center",
      color: "#FFFFFF",
      marginTop: "-58px",
      "@media(max-width:480px)": {
        fontSize: "30px",
        marginTop: "-29px",
      },
    },
    "@media(max-width:480px)": {
      marginTop: "-4rem",
    },
  },
  img1: {
    color: "red",
    "@media(max-width:1120px)": {
      width: "100%",
    },

    "@media(max-width:960px)": {
      width: "100%",
    },

    "@media(max-width:480px)": {
      width: "100%",
    },
  },
//   bannerBox1: {
//     padding: "70px 0",
//   },
  partnerbox: {
    border: "none",
    height: "auto",
    padding: "11px",
    overflow: "hidden",
    position: "relative",
    maxWidth: "96%",
    // background:
    //   "linear-gradient(180deg, rgba(12, 169, 203, 0.3) 0%, rgba(196, 196, 196, 0) 100%)",
    // "& div": {
    //   height: "auto",
    //   overflow: "hidden",
    //   position: "relative",
    //   maxWidth: "100%",
    // },
    "& figure": {
      margin:"0",
    //   height: "97px",
      display: "flex",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },
    "& img": {
    //   maxHeight: "1 00px",
      width: "auto",
      maxWidth: "100%",
    },
  },
  partnerboxicon: {
    "@media(max-width:540px)": {
      "&  figure": {
        width: "100%",
        margin: " 0",
        overflow: "hidden",
        borderRadius: "5px",
      },
    },
  },
}));

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  // slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
  ],
};
export default function Partners() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
    

      <Container maxWidth="lg">
        <Box className={classes.bannerBox1}>
         
         
          <Box mt={5}>
            <Slider {...settings}>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
               
                    <figure>
                      <img src="images/1.png" width='100%' />
                    </figure>
                
                </div>
              </Box>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
                  
                    <figure>
                     <img src="images/2.png" width='100%' />
                    </figure>
                 
                </div>
              </Box>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
                  
                    <figure>
                    <img src="images/3.png" width='100%' />
                    </figure>
            
                </div>
              </Box>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
      
                    <figure>
                    <img src="images/4.png" width='100%' />
                    </figure>
                  
                </div>
              </Box>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
               
                    <figure>
                      <img src="images/1.png" width='100%' />
                    </figure>
                
                </div>
              </Box>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
                  
                    <figure>
                     <img src="images/2.png" width='100%' />
                    </figure>
                 
                </div>
              </Box>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
                  
                    <figure>
                    <img src="images/3.png" width='100%' />
                    </figure>
            
                </div>
              </Box>
              <Box className={classes.partnerbox}>
                <div className={classes.partnerboxicon}>
      
                    <figure>
                    <img src="images/4.png" width='100%' />
                    </figure>
                  
                </div>
              </Box>
              
             
            </Slider>
          </Box>

     
        </Box>
      </Container>
    </Box>
  );
}
