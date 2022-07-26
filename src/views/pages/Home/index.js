import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";

import Homes from "../Homes";
import Level2 from "./Level2";
import Popular from "./Popular";
import Crypto from "./Crypto"
import Popular1 from "./Popular1"
import Social from "./Social"
import Guide from "./Guide";
// import Log from "./Log";
import Dash from "./Dash"
function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Box>
        {/* <Log/> */}
        <Homes/>
        <Level2/>
        <Popular1/>
        <Guide/> 
        <Popular/>
        <Crypto/>
        <Social/>
        {/* <Dash/> */}


         

        
        
      </Box>
    </Page>
  );
}

export default Home;
