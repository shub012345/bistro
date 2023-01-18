import React, { useState } from "react";
import { questions } from "./Api";

import Card from "@mui/material/Card";
import { Box } from "@mui/material";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const AddRestaurant = () => {
  const [data, setData] = useState(questions);
  
  return (
    <>
      {data.map((curElem) => {
        const { id, name, image, description, price } = curElem;
        return (
          <>
           <div className="flex flex-row justify-center basis-full h-full gap-y-4">
           {/* <Box className="p-5 flex md:basis-full grow-1 shrink-1 justify-between flex-wrap"> */}
            <Card sx={{ maxWidth: 225 }}>
              <Box sx={{ height: "30px , width:45px" }}>
                <img src={image} alt="sss"></img>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    price: {price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">add to cart</Button>
                </CardActions>
              </Box>
            </Card>
            {/* </Box> */}
          </div>
          </>
        );
      })}
    </>
  );
};

export default AddRestaurant;
