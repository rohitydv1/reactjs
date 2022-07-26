import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#131a31",
    height: "auto",
    borderRadius: "40px",
    paddingBottom: "25px",
    textAlign: "center",
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "17px",
    },
  },
  typo1: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "35px",
    lineHeight: "44px",
    textTransform: "capitalize",
    fontFeatureSettings: "'salt' on, 'liga' off",
    color: "#FFFFFF",
    paddingTop: "50px",
    textAlign: "left",
    paddingLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
      paddingTop: "35px",
    },
  },
  typo2: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "150%",
    color: "#FDFDFF",
    paddingTop: "20px",
    textAlign: "left",
    paddingLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      paddingTop: "10px",
    },
  },
  typo3: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "35px",
    lineHeight: "44px",
    textTransform: "capitalize",
    fontFeatureSettings: "'salt' on, 'liga' off",
    background: "linear-gradient(180deg, #68DAF0 0%, #4B8ADE 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    paddingTop: "65px",
    paddingBottom: "150px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      paddingTop: "60px",
      paddingBottom: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      paddingTop: "40px",
      paddingBottom: "100px",
    },
  },
  bit: {
    backgroundImage: 'url("images/side1.png")',
    backgroundRepeat: "no-repeat",
    borderRadius: "32px",
    backgroundSize: "cover",
    backgroundPosition:"center"
  },
}));

export default function Level2() {
  const classes = useStyles();

  return (
    <Box
      style={{
        backgroundColor: "#040C26",
        height: "auto",
        paddingBottom: "100px",
      }}
    >
      <Container>
        <Box style={{ paddingTop: "100px" }}>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={classes.bit}>
                {/* <img src="images/side1.png" alt="" width="100%" /> */}
                <Typography className={classes.typo1}>Shopping Mall</Typography>
                <Typography className={classes.typo2}>
                  Ecommerce Platform
                </Typography>
                <Typography className={classes.typo3}>COMING SOON</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src="images/side2.png" alt="" width="80%" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
