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
  bg1: {
    
    
    backgroundImage: 'url("images/bg1.png")',
    height:"auto",
    width:"100%",
    backgroundSize:"cover",
    paddingBottom:"50px",
    backgroundColor:"#040C26",
    backgroundPosition:"center"
  },
  typ1: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "40px",
    color: "#fff",
  },
  typ2: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "40px",
    color: "#fff",
    paddingTop:"150px",
    lineHeight:"1",
    [theme.breakpoints.down("md")]:{
      paddingTop:"100px",

    },
  },
  bit: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "33px",
    color: "#fff",
  },
  typ3: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "16px",
    color: "#898CA9",
    paddingTop:'10px'
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
  }
}));

export default function Popular() {
  const classes = useStyles(); 

  return (
    <Box className={classes.bg1} >
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={3} style={{ paddingTop: "100px" }}>
            <Grid item sm={12} md={5} lg={5}>
              <Typography className={classes.typ1}>Staking</Typography>
              <Typography className={classes.typ2}>
                Earn Up To 23% <span className={classes.bit}> yearly on your crypto</span>
              </Typography>
              <Typography className={classes.typ3}>More than 100x the average national interest rate</Typography>
              <Button className={classes.btn}>
            Get Started
            </Button>
            </Grid>
            <Grid item sm={12} md={7} lg={7}>
              <img src="images/bgm.png" alt="" width="95%"  />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
