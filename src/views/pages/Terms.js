import React from "react";
import { Box, Container, makeStyles, Typography,ListItem, List } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

export default function Level2() {
  const classes = useStyles();

  return (
    <Box style={{backgroundColor:"#040C26",paddingBottom:"100px",color:"white",marginTop:"-100px",}}>
      <Container style={{paddingTop:"150px"}}>
        <Box>
        <Box>
          <h1>Terms & Condition</h1>
        </Box>
        <Typography >
              “Personal information” is any information that can be used by
              itself to uniquely identify, contact, or locate a person, or can
              be used with information available from other sources to uniquely
              identify an individual.
            </Typography>
            <Typography variant="body2">
              Personal information collected and/or held by us may include but
              is not limited to your name, father's name, mother's name,
              spouse's name, date of birth, current and previous addresses,
              telephone number, mobile phone number, email address, occupation
              and information contained in the documents used as proof of
              identity and proof of address.
            </Typography>
            <Typography variant="body2">
              For the purpose of this policy, sensitive personal data or
              information like financial information (such as bank account or
              credit card or debit card or other payment instrument details),
              passwords or authentication information for any of our products or
              services etc. has been considered as a part of Personal
              Information.
            </Typography>
            <Typography variant="body2">
              ABC and its group companies may collect, store, process and
              transfer your Personal Information well in accordance with the
              applicable laws and regulations for a variety of regulatory and
              business purposes. These may include, but are not limited to:
            </Typography>
            <Container>
              <Box mb={4}>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>Verify your identity;</ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Complete transactions effectively and bill for products
                      and services;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Respond to your request for service or assistance;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Perform market analysis, market research, business and
                      operational analysis;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Provide, maintain and improve our products and services;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Anticipate and resolve issues and concerns with our
                      products and services;
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Promote and market products and services which we consider
                      may be of interest to you and/or may benefit you; and
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textboxs}>
                  <List>
                    <ListItem>
                      Ensure adherence to legal and regulatory requirements for
                      prevention and detection of frauds and crimes.
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Container>
            <Box>
              <Typography variant="body2">
                This Privacy Policy describes the Personal Information which we
                may collect and provides our approach towards handling and usage
                of or dealing with the same in compliance with the applicable
                laws and regulations.
              </Typography>
              <Typography variant="body2">
                Please read the terms of this Privacy Policy carefully. By using
                and continuing to use our products and services, you are deemed
                to have accepted and consented to the terms of this Policy.
              </Typography>
              <Typography variant="body2">
                For further details on the policy, please click on the links
                below:
              </Typography>
            </Box>
            <Container>
              <Box mb={4}>
                <Box className={classes.textbox}>
                  <List>
                    <ListItem>Collection of Personal Information</ListItem>
                  </List>
                </Box>
                <Box className={classes.textbox}>
                  <List>
                    <ListItem>
                      Disclosure and Transfer of Personal Information
                    </ListItem>
                  </List>
                </Box>
                <Box className={classes.textbox}>
                  <List>
                    <ListItem>Security Practices and Procedures</ListItem>
                  </List>
                </Box>
                <Box className={classes.textbox}>
                  <List>
                    <ListItem>Access and Correction</ListItem>
                  </List>
                </Box>
                <Box className={classes.textbox}>
                  <List>
                    <ListItem>Feedback and Concerns</ListItem>
                  </List>
                </Box>
              </Box>
            </Container>
            <Box>
              <Typography variant="body2">
                ABC reserves the right to amend or modify this Privacy Policy at
                any time, as and when the need arises. We request you to visit
                our website www.ABC.in periodically for contemporary information
                and changes.
              </Typography>
            </Box>
            <Box textAlign="left">
              <Typography variant="h4">
                Collection of Personal Information
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2">
                We may collect your Personal Information when you use our
                services or websites or otherwise interact with us during the
                course of our relationship. The Personal Information may be
                collected by ABC through the Customer Application Form (CAF) or
                through its authorized third parties. Third Party is a service
                provider who associates with ABC and is involved in handling,
                managing, storing, processing, protecting and transmitting
                information on behalf of ABC. This definition also includes all
                sub-contractors, consultants and/or representatives of the Third
                party.
              </Typography>
              <Typography variant="body2">
                We may also collect and hold information related to your
                utilization of our services which may include your call details,
                your browsing history on our website, location details and
                additional information provided by you while using our services.
              </Typography>
              <Typography variant="body2">
                We may keep a log of the activities performed by you on our
                network and websites by using various internet techniques such
                as web cookies, web beacons, server log files, etc. for
                analytical purposes and for analysis of the amiability of
                various features on our site. This information may be used to
                provide you with a better experience at our portal along with
                evidentiary purposes. At any time while you are browsing our
                site, if you do not wish to share browsing information, you may
                opt out of receiving the cookies from our site by making
                appropriate changes to your browser privacy settings. Please
                refer to ABC Online Cookie Policy for more details.
              </Typography>
              <Typography variant="body2">
                In case you do not provide your information or consent for usage
                of Personal Information or later on withdraw your consent for
                usage of the personal information so collected, ABC reserves the
                right to discontinue the services for which the said information
                was sought.
              </Typography>
            </Box>
            <Box textAlign="left">
              <Typography variant="h4">
                Disclosure and Transfer of Personal Information
              </Typography>
            </Box>


        </Box>
      </Container>
    </Box>
  );
}
