import React, { useState } from "react";
import { questions } from "../Components/Api";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import ZCard from "../Components/ZCard";
import Navbar from "../Components/Navbar";
import LoginNavbar from "../Components/LoginNavbar";
import Footer1 from "../Components/Footer1";
import LoginFooter from "../Components/LoginFooter";
const Explore = () => {
  const [data, setData] = useState(questions);
  return (
    <>
    <LoginNavbar/>
      <div className="px-4 fullHeight w-100% mt-16 flex-wrap">
        <div className="text-5xl text-white">Collections</div>
      <div className="text-white">  Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends</div>
        <div className="flex flex-row basis-full  gap-4 mb-1 lg:no-wrap">
          <ZCard
            title="Night Owl"
            desc="fast foods, drinks "
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zvsvniljlgabxchxrutx"
          />
          <ZCard
            title="Apna Sweets"
            desc="sweets ,dryfruits"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mt3fufsppct9b2k59ovu"
          />
          <ZCard
            title="Somani Sandwiches"
            desc="sandwiches,burgers, bevarages"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jggojkdso4xe1filzkhx"
          />
          <ZCard
            title="Om Snacks"
            desc="snacks,wafers"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/obd9uwesga5zg6jpz66d"
          />
        </div>
        <div className="mt-4 flex flex-row basis-full  gap-4 lg:no-wrap ">
          <ZCard
            title="Maharaja Burger"
            desc="burgers,pizza"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f"
          />
          <ZCard
            title="Lunch box meals "
            desc="regular thali"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/prnetugmncqgrbjvz77n"
          />
          <ZCard
            title="Deserts delights"
            desc="cakes ,pastries"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tvf99sjz7e5gha1txypx"
          />
          <ZCard
            title="North Degree"
            desc="Hotdogs,burgers,drinks"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fjvib2asmxrom5kx4toq"
          />
        </div>
        <div className="mt-4 flex flex-row md:basis-full  gap-4 lg:no-wrap ">
          <ZCard
            title="Urban King"
            desc="Steet Foods"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oyvql2cg9itb2i5wgcye"
          />
          <ZCard
            title="Sassy Sandwitch"
            desc="sandwitches,fast food"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/trgnjlohkhmti3jgt0h0"
          />
          <ZCard
            title="kBira"
            desc="Special Panner thali"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/amfytjodlsuutnqeejxq"
          />
          <ZCard
            title="Cake Studios"
            desc="Cakes, Deserts"
            imgsrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tf7onlkutqqxhbfo1ru8"
          />
        </div>
      
      </div>
    
    </>
  );
};

export default Explore;
