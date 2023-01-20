import React from "react";

import "../index.css";

import ZCard from "../Components/ZCard";
import Collection from "../Components/Collection";
import LocationCard from "../Components/LocationCard";
import Footer1 from "../Components/Footer1";
import { Box, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
    <div className="body1">
      <Navbar />
      <Typography
        variant="h1"
        className="text-white text-center text-4xl font-serif "
      >
        <span className="bistro"> Bistro</span>
      </Typography>
      <Typography
        variant="h4"
        className="text-center xl:text-center md:text-center text-white"
      >
        Discover the best food & drinks in indore
      </Typography>
      </div>
     
      <Box sx={{ display: "flex", flex: "row", gap: "0 3rem" }}>
        <Box className="p-5 flex md:basis-full grow-1 shrink-1 justify-between flex-wrap">
          <ZCard
            title="Order Online"
            desc="Stay home and order to your doorstep"
            imgsrc="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          />
          <ZCard
            title="Dining"
            desc="View the city's favourite dining venues"
            imgsrc="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          />
          <ZCard
            title="NightLife & clubs"
            desc="View the city's favourite dining venues"
            imgsrc="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          />
          <ZCard
            title="Veggies & Snacks"
            desc="Snacks and veggies at your doorstep "
            imgsrc="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          />
        </Box>
      </Box>
      <Box sx={{ display: "" }}></Box>
      <br />
      <Typography variant="h3" align="center">
        Collections
      </Typography>
      <Typography variant="h5" align="center">
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Indore, based on trends
      </Typography>
      <Box sx={{ display: "flex", flex: "row" }}>
        <Box className="p-5 flex md:basis-full grow-1 shrink-1 justify-between flex-wrap ">
          <Collection
            title="Best of Indore Dishes"
            desc=""
            imgsrc="https://thumbs.dreamstime.com/b/rajwada-palace-indore-historical-city-india-127733010.jpg"
          />
          <Collection
            title="Trending this weekend"
            desc=""
            imgsrc="https://media.istockphoto.com/id/1317295804/photo/fourth-of-july-american-food-above-view-table-scene-on-white-wood.webp?s=612x612&w=is&k=20&c=hK4erp2Af3bPo0mgkz2rQqVcyXheHqhTMeu1gfABijU="
          />
          <Collection
            title="Live sports Screening"
            desc=""
            imgsrc="https://static7.depositphotos.com/1000423/702/i/450/depositphotos_7020377-stock-photo-crowd-on-the-stadium.jpg"
          />
          <Collection
            title="Best pizza places in town"
            desc=""
            imgsrc="https://media.istockphoto.com/photos/freshly-baked-pizza-with-arugula-tomato-red-onion-and-mozzarella-picture-id1279000076?k=20&m=1279000076&s=612x612&w=0&h=q8-RizL5XJMyc1Zai_XALfLwONyhjuCLTX0Cvq65BRk="
          />
        </Box>
      </Box>

      <LocationCard />
      <br />
      <Footer1 />
    </>
  );
};

export default Home;
