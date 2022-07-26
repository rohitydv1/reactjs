import React from "react";
import {
  Grid,
  InputAdornment,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {} from "react-feather";
const useStyles = makeStyles((theme) => ({
  footerSection: {
    backgroundColor: "#101833",
    position: "relative",
    padding: "50px 0px",
    backgroundPosition: " bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
    },
    // "&"
    "& h5": {
      fontWeight: "bold",
      fontSize: "16px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#2f086a",
    },
    "& ul": {
      paddingLeft: "0",
    },
    "& p": {
      marginBottom: "0px",
      marginTop: "10px",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#000000",
    },
  },
  footerBg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "0",
  },
  ListItem: {
    paddingLeft: "0px",
  },
  borderBottmo: {
    overflow: "hidden",
    background: "#000",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  signupBtn: {
    color: "#fff",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    height: "45px",
    minWidth: "100px",
    borderRadius: "50px",
    position: "absolute",
    top: "5px",
    right: "5px",
    boxShadow:
      "0px 8px 24px rgba(38, 50, 56, 0.1), 0px 16px 32px rgba(38, 50, 56, 0.08)",
    lineHeight: "36px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: " 1px",
    background: "#040405",
    "&:hover": {
      background: "#040405",
      color: "#fff",
    },
  },
  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  icons: {
    justify: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
  },
  inputBox: {
    position: "relative",
  },
  footerBgImg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: "1",
  },
  // textFild: {
  //   position: "relative",

  //   "& button": {
  //     position: "absolute",
  //     fontFamily: "Poppins",
  //     height: "100%",
  //     background: "linear-gradient(180deg, #6BE3F2 0%, #467DDB 100%)",
  //     minWidth: "90px",
  //     fontSize: "16px",
  //     fontWeight: "500",
  //     borderRadius: "100px",
  //     color: "#fff",
  //     "&:hover": {
  //       backgroundColor: "#000",
  //     },
  //   },
  // },
  typ1: {
    fontFamily: "Lato",

    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "29px",
  },
  typs: {
    fontFamily: "Poppins",
    color: "white",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "29px",
  },
  Grid: {
    paddingLeft: "100px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
  },
  spane: {
    borderLeft: "3px solid skyblue",
    // borderImage:
    //   "llinear-gradient(180deg, #68DAF0 0%, #4B8ADE 100%) 10",
    borderInlineColor: "linear-gradient(180deg, #68DAF0 0%, #4B8ADE 100%)",
    paddingLeft: "12px",
    marginLeft: "-17px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.footerSection}
        style={{ backgroundImage: "url('./images/footerIMG.png')" }}
      >
        <Box
          style={{ margin: "20px 10px 0", position: "relative", zIndex: "2" }}
        >
          <Container maxWidth="lg">
            <Grid container justify="space-around">
              <Grid item xs={12} md={4}>
                <img alt="" src="images/logo.png" />
                <Typography
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Lato",

                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "29px",
                  }}
                  className={classes.typ1}
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4} className={classes.Grid}>
                <Box>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "29px",
                    }}
                    className={classes.typ2}
                  >
                    <span className={classes.spane}>Help and Support</span>
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "30px",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "30px",
                    }}
                  >
                    FAQs
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "30px",
                    }}
                  >
                    New Listing
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "30px",
                    }}
                  >
                    Terms & Conditions
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} align="left">
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "29px",
                  }}
                  className={classes.typ2}
                >
                  <span className={classes.spane}>
                    SIGN UP FOR EMAIL UPDATE
                  </span>
                </Typography>
                <Box mt={3} className={classes.textFild}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    placeholder="Your e-mail address"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            style={{
                              background:
                                "linear-gradient(180deg, #6BE3F2 0%, #467DDB 100%)",
                              color: "#fff",
                              fontWeight: "500",
                              fontFamily: "Poppins",
                              borderRadius: "100px",
                              left: "15px",
                              border: "1px solid skyblue",
                              height: "41px",
                              width: "122px",
                            }}
                          >
                            Subscribe
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      color: "white",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "30px",
                    }}
                  >
                    Sign up with your email address to receive news and updates
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <hr style={{ border: "0.5px solid #373737" }} />
            {/* <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Copyright @ 2022 e-bulls. All rights reserved.
                </Typography>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Market
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Market
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Market
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Market
                </Typography>
              </Box>
            </Box> */}
            <Box>
              {" "}
              <Grid container style={{display:"flex", justifyContent:"space-between"}}>
                <Grid item  >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Copyright @ 2022 e-bulls. All rights reserved.
                </Typography>

                </Grid>
                <Grid item   style={{display:"flex"}}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                    paddingRight:"25px"
                  }}
                >
                  Market
                </Typography>

                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                    paddingRight:"25px"
                    
                  }}
                >
                  Exchange
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                    paddingRight:"25px"
                  }}
                >
                  Staking
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  Wallet
                </Typography> 
                

                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
