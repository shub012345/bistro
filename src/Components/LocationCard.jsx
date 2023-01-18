import { Card, CardContent, Typography } from "@mui/material";

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Item = styled(Paper)(({ theme }) => ({
 
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LocationCard = () => {
  return (
    <>
      
      <Typography variant="h4"  align="center" className="mb-3 text-black">
        Popular Localities in and around Indore
      </Typography>
      
      <div className="grid grid-cols-4 gap-6 lq">
        <Grid >
          <Item className="bg-red-300">Gitabhawan </Item>
        </Grid>
        <Grid >
          <Item >VijayNagar</Item>
        </Grid>
        <Grid  >
          <Item>Bhawarkua</Item>
        </Grid>
        <Grid >
          <Item >Mahow</Item>
        </Grid>
        <Grid  >
          <Item >LIG</Item>
        </Grid>     
        <Grid >
          <Item >Navlakha</Item>
        </Grid>
        <Grid >
          <Item >Raddison</Item>
        </Grid>
        <Grid >
          <Item >Rajwada</Item>
        </Grid>
      </div>
    </>
  );
};

export default LocationCard;
