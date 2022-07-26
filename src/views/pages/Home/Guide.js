import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Container, Typography } from "@material-ui/core";
import { useState } from "react";

const Datas = [
  {
    id: 1,
    img: "./images/r1.png",
    typo: " Create a e-bulls account",
    typo1: " Get $100 points and $10000 trial fund.",
  },
  {
    id: 2,
    img: "./images/r2.png",
    typo: "Make a deposit",
    typo1:
      "Fund your account and start your journey, several payment methods are supported",
  },
  {
    id: 3,
    img: "./images/r3.png",
    typo: "Complete KYC",
    typo1: " Complete KYC and get a complete account",
  },
  {
    id: 4,
    img: "./images/r4.png",
    typo: "Complete KYC",
    typo1: " Sell, buy or copy trade crypto and explore more",
  },
];

const useStyle = makeStyles((theme) => ({
  box: {
    backgroundColor: "#040c26",
   
         
        backgroundImage:'url("images/nig.png")',
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        height:"auto",
        paddingBottom:"100px",
        [theme.breakpoints.down("sm")]: {
          backgroundPosition:"inherit",
         },

  },
  typo: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
   
    lineHeight: "44px",
    textTransform: "capitalize",
    fontFeatureSettings: "'salt' on, 'liga' off",
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
     },
  },
  img: {
    marginTop: "60px",
  },
  bull: {
    marginTop: "60px",
    marginLeft: "35px",
  },
  create: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "44px",
    fontFeatureSettings: "'salt' on, 'liga' off",
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      fontSize: "17px",
      lineHeight: "30px",
     },
  },
  get: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#898CA9",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
     },
  },
  guide: {
    width: "120%",
    marginTop:"-50px",
    [theme.breakpoints.down("md")]: {
     marginLeft:"-10px",
     marginTop:"-10px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop:"-117px",
      justifyContent:"center"
     },
     [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop:"-41px",
      marginLeft:"-66px"
     },
  
  },
  height:{
    paddingTop:"50px",
    [theme.breakpoints.down("xs")]: {
     paddingTop:"5px"
     },
  }
}));

export default function Guide() {
  const classes = useStyle();
  const [Data, setData] = useState(Datas);
  return (
    <Box className={classes.box}>
      <Container>
        <Grid container spacing={3} className={classes.height} >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Container>
              <Typography className={classes.typo}>Beginner’s guide</Typography>
              {Data.map((value) => {
                return (
                  <Box style={{ display: "flex" }}>
                    <Box>
                      <img src={value.img} alt="" className={classes.img} />
                    </Box>
                    <Box className={classes.bull}>
                      <Typography className={classes.create}>
                        {value.typo}
                      </Typography>
                      <Typography className={classes.get}>
                        {value.typo1}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
           
           
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
