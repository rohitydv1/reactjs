import React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  TextField,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";
import * as yep from "yup";
import { VscMail } from "react-icons/vsc";
import { MdOutlineVisibility } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

const formInitialSchema = {
  email: "",
  password: "",
};

const formValidationSchema = yep.object().shape({
  email: yep
    .string()
    .email("Please enter a valid email address upload")
    .required("*Please enter email ID."),

  password: yep

    .string()
    .required("*Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    borderRadius: "50px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderRadius: "40px",
      padding: "8px",
    },
  },
  box: {
    backgroundImage: "url('./images/login1.png')",
    backgroundColor: "#040c26",
    width: "100%",
    height: "auto",
    marginTop: "100px",
    paddingBottom: "200px",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 300px)": {
      // marginTop: "-130px",
      // marginLeft: "0px",
      backgroundPosition:"center"

    },
  },
  typo1: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "60px",
    lineHeight: "130%",
    textAlign: "center",
    color: "#FFFFFF",

    [theme.breakpoints.only("md")]: {
      fontSize: "55px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
      marginTop: "-50px",
      marginLeft: "50px",
      paddingBottom: "20px",
    },
    "@media (max-width: 300px)": {
      // marginTop: "-130px",
      marginLeft: "0px",

    },
  },
  typo2: {
    fontFamily: "'Inter'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "150%",
    color: "#b8bdcb",
    paddingLeft: "21px",
    paddingTop: "15px",
    [theme.breakpoints.only("md")]: {
      fontSize: "15px",
      paddingLeft: "1px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      paddingBottom:"10px",
    },
  },
  typo3: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "30px",
    lineHeight: "130%",

    background: "linear-gradient(180deg, #68DAF0 0%, #4B8ADE 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  typo4: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#898CA9",
    paddingBottom: "41px",
    paddingTop: "8px",
    [theme.breakpoints.only("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      paddingBottom: "26px",
    },
  },
  boxx: {
    marginTop: "20px",
  },
  btn: {
    background: "linear-gradient(180deg, #6BE3F2 0%, #467DDB 100%)",
    borderRadius: "100px",
    border: "1px solid skyblue",
    color: "#fff",
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "33px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    height: "60px",
    width: "180px",
    [theme.breakpoints.only("md")]: {
      fontSize: "18px",
      width: "160px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      height: "50px",
      width: "140px",
    },
  },
  link1: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "15px",
    lineHeight: "150%",
    color: "#898CA9",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    textAlign: "center",
    [theme.breakpoints.only("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  dont: {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#898CA9",
    paddingTop: "40px",
    paddingBottom: "20px",
    [theme.breakpoints.only("md")]: {
      paddingTop: "25px",
      fontSize: "14px",
      
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "20px",
      fontSize: "14px",
      
    },
  },
  by: {
    marginTop: "5px",
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "150%",
    color: "#898CA9",
    [theme.breakpoints.only("md")]: {
      fontSize: "12px",
      marginTop: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      marginTop: "7px",
    },
  },
  fieldInput: {
    border: "1px",
    height: "50px",
  },
}));

export default function Level2() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleFormSubmit = async (values) => {};

  return (
    <Box className={classes.box}>
      <Container maxWidth="lg">
        <Grid container spacing={3} style={{ paddingTop: "75px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Container>
              <Typography className={classes.typo1}>Welcome Back...</Typography>
              <Typography className={classes.typo2}>
                Buy, sell, and grow your crypto with Crypto,the platform
                dedicated to every trader at every level.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography className={classes.typo3}>Sign in</Typography>
                  <Typography className={classes.typo4}>
                    Please enter your email and password
                  </Typography>
                  <Formik
                    initialValues={formInitialSchema}
                    initialStatus={{
                      success: false,
                      successMsg: "",
                    }}
                    validationSchema={formValidationSchema}
                    onSubmit={(values) => handleFormSubmit(values)}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      touched,
                      values,
                      setFieldValue,
                    }) => (
                      <Form>
                        <Box>
                          <TextField
                            fullWidth
                            className={classes.text}
                            id="outlined-textarea"
                            placeholder="user@email.com"
                            variant="outlined"
                            type="text"
                            name="email"
                            InputProps={{
                              className: classes.fieldInput,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton>
                                    <VscMail style={{ fontSize: "20px" }} />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            value={values.email}
                            error={Boolean(touched.email && errors.email)}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <FormHelperText
                            error
                            style={{ margin: "0px", fontSize: "12px" }}
                          >
                            {touched.email && errors.email}
                          </FormHelperText>
                        </Box>
                        <Box className={classes.boxx}>
                          <TextField
                            fullWidth
                            className={classes.text}
                            id="outlined-textarea"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            variant="outlined"
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                            error={Boolean(touched.password && errors.password)}
                            onBlur={handleBlur}
                            InputProps={{
                              className: classes.fieldInput,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <MdOutlineVisibility
                                        style={{
                                          fontSize: "20px",
                                          paddingRight: "12px",
                                        }}
                                      />
                                    ) : (
                                      <AiOutlineEyeInvisible
                                        style={{
                                          fontSize: "20px",
                                          paddingRight: "12px",
                                        }}
                                      />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <FormHelperText
                            error
                            style={{ margin: "0px", fontSize: "12px" }}
                          >
                            {touched.password && errors.password}
                          </FormHelperText>
                        </Box>
                        <Box style={{ display: "flex", marginTop: "20px" }}>
                          <Checkbox
                            color="red"
                            inputProps={{
                              "aria-label": "secondary checkbox",
                              color: "red",
                            }}
                          />
                          <Typography className={classes.by}>
                            By login.you agree to our{" "}
                            <Link to="/terms" style={{ color: " #53a0e3" }}>
                              Terms & Condition
                            </Link>
                          </Typography>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </CardContent>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                    paddingLeft: "20px",
                  }}
                >
                  <Button className={classes.btn}>SIGN IN</Button>
                  <Link className={classes.link1}>Forgot password?</Link>
                </Box>
                <Box style={{ textAlign: "center" }}>
                  <Typography className={classes.dont}>
                    Don’t have a account yet ?{" "}
                    <Link style={{ color: " #53a0e3" }}>Register</Link>
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
