import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { Box, Container, Typography, Button } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";



const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  typ1: {
    fontFamily: "Poppins",
    fontSize: "40px",
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "27px",
    },
  },
  typ2: {
    fontFamily: "Inter",
    fontSize: "20px",
    color: "#898CA9",
    fontWeight: "400",
    textAlign: "center",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  ty1: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    alignItems: "center",
    display: "flex",
    paddingLeft: "20px",
    color: "#FFFFFF",
  },
  ty2: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    display: "flex",
    alignItems: "center",
    color: "#717C98",
    paddingLeft: "8px",
  },
  ty3: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "150%",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#0DBB7C",
    paddingLeft: "95px",
  },
  ty4: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "150%",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#FFFFFF",
    paddingLeft: "120px",
  },
  ty5: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "150%",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#0DBB7C",
    paddingLeft: "140px",
  },
  ty6: {
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "100%",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: "#6BE3F2",
    width: "200px",
  },
  head:{
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    display: "flex",
    alignItems: "center",
    color: "#717C98",
    paddingLeft: "8px",
    paddingBottom:"20px",

  }
}));

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Box
      style={{
        backgroundColor: "#040C26",
        height: "auto",
        paddingBottom: "130px",
      }}
    >
      <Container>
        <Box>
          <Typography className={classes.typ1}>Popular crypto</Typography>
        </Box>
        <Box>
          <Typography className={classes.typ2}>
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
            <br />
            bank transfers or your credit/debit card.
          </Typography>
        </Box>
      </Container>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
          <Box>


          </Box>


            <Box
              style={{
                backgroundColor: "#040C26",
                height: "auto",
                paddingTop: "100px",
              }}
              
            >    <Container style={{display:"flex"}}><Typography className={classes.head}> Market </Typography>
            <Typography style={{paddingLeft:"200px"}} className={classes.head}> Price </Typography>
            <Typography style={{paddingLeft:"150px"}} className={classes.head}> Volume </Typography>
            <Typography style={{paddingLeft:"150px"}} className={classes.head}> 24H Change </Typography>
            
            
            
            </Container>      
              <Container
                style={{
                  display: "flex",
                  borderBottom: "1px solid #2B2C3B",
                  paddingBottom: "23px",
                }}
              >   
                <Box style={{ display: "flex" }}>
                  <img src="images/b1.png" alt="" />
                  <Typography className={classes.ty1}> BTC </Typography>
                  <Typography className={classes.ty2}> /Bitcoin </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{paddingLeft:"100px"}} className={classes.ty3}> $4,7496 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty4}> $56,290.30 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty5}> +1.68% </Typography>
                </Box>
                <Box style={{ paddingLeft: "100px" }}>
                  <img src="images/g1.png" alt="" />
                </Box>
                <Button className={classes.ty6}>Trade Now&nbsp;➔</Button>
              </Container>
            </Box>

            <Box
              style={{
                backgroundColor: "#040C26",
                height: "auto",
                paddingTop: "20px",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  borderBottom: "1px solid #2B2C3B",
                  paddingBottom: "23px",
                }}
              >
                <Box style={{ display: "flex" }}>
                  <img src="images/b2.png" alt="" />
                  <Typography className={classes.ty1}> ETH</Typography>
                  <Typography className={classes.ty2}> /Ethereum </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{paddingLeft:"74px"}} className={classes.ty3}> $4,7496 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty4}> $56,290.30 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty5}> +1.68% </Typography>
                </Box>
                <Box style={{ paddingLeft: "100px" }}>
                  <img src="images/g2.png" alt="" />
                </Box>
                <Button className={classes.ty6}>Trade Now&nbsp;➔</Button>
              </Container>
            </Box>

            <Box
              style={{
                backgroundColor: "#040C26",
                height: "auto",
                paddingTop: "20px",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  borderBottom: "1px solid #2B2C3B",
                  paddingBottom: "23px",
                }}
              >
                <Box style={{ display: "flex" }}>
                  <img src="images/b3.png" alt="" />
                  <Typography className={classes.ty1}> BNB </Typography>
                  <Typography className={classes.ty2}> /Binance </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{paddingLeft:"78px",color:"#F35D5D"}} className={classes.ty3}> $4,7496 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty4}> $56,290.30 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{color:"#F35D5D"}} className={classes.ty5}> +1.68% </Typography>
                </Box>
                <Box style={{ paddingLeft: "100px" }}>
                  <img src="images/g3.png" alt="" />
                </Box>
                <Button className={classes.ty6}>Trade Now&nbsp;➔</Button>
              </Container>
            </Box>

            <Box
              style={{
                backgroundColor: "#040C26",
                height: "auto",
                paddingTop: "20px",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  borderBottom: "1px solid #2B2C3B",
                  paddingBottom: "23px",
                }}
              >
                <Box style={{ display: "flex" }}>
                  <img src="images/b4.png" alt="" />
                  <Typography className={classes.ty1}> USDT </Typography>
                  <Typography className={classes.ty2}> /Usdt </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty3}> $4,7496 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty4}> $56,290.30 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty5}> +1.68% </Typography>
                </Box>
                <Box style={{ paddingLeft: "100px" }}>
                  <img src="images/g4.png" alt="" />
                </Box>
                <Button className={classes.ty6}>Trade Now&nbsp;➔</Button>
              </Container>
            </Box>

            <Box
              style={{
                backgroundColor: "#040C26",
                height: "auto",
                paddingTop: "20px",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  borderBottom: "1px solid #2B2C3B",
                  paddingBottom: "23px",
                }}
              >
                <Box style={{ display: "flex" }}>
                  <img src="images/b5.png" alt="" />
                  <Typography className={classes.ty1}> XRP </Typography>
                  <Typography className={classes.ty2}> /Ripple </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{color:"#F35D5D"}} className={classes.ty3}> $4,7496 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography className={classes.ty4}> $56,290.30 </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{color:"#F35D5D"}} className={classes.ty5}> +1.68% </Typography>
                </Box>
                <Box style={{ paddingLeft: "100px" }}>
                  <img src="images/g5.png" alt="" />
                </Box>
                <Button className={classes.ty6}>Trade Now&nbsp;➔</Button>
              </Container>
            </Box>
            
          </TableBody>
          
        </Table>
      </TableContainer>
      
    </Box>
    
  );
}
