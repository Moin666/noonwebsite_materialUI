import logo from "./logo.svg";
import React from 'react';

import "./App.css";
import PrimarySearchAppBar from "./component/navbar";
import AllCategories from "./component/allCategories";
import FreeDelivery from "./component/freeDelibery";
import Carousel from "./common/carousel";
import CarouselComplete from "./component/carouselComplete";

import ImageDataContext from "./context/imageDataContext";
import SetTablePart from "./component/setTablePart"
import MegaDeal from "./component/megaDeal";
import MenuBar from "./common/menu"
import { useState } from "react";

import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import MoreClearance from "./component/moreClearance"


function App() {
  const imgData = [
    {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01-frag.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_uae-mega-03.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-mega-01.png"
    }
  ];

  const megaDealImages =[
    {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220516/4f2f689e2774faa782f5541f7198af0d/en_mb_uae-mega-01.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220513/e53ff4481c2db1adba2528fd5c2a1491/en_dk_uae-mega-02.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220515/66b60fb64c94e6805de37e047d39550d/en_mb_uae-mega-03-backup.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220514/30321d99e9c64cf46960fc9311ff2b99/en_mb_uae-mega-04.png"
    }
  ];
  const sellUpTo =[
    {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220512/eeab095cb62684f674a60cd9c0ce818d/en_dk_uae-sfb-01.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png"
    },  {
      urlImg:
        "https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png"
    }
  ];
  const clearnceImgs =[
    {
      urlImg:
        "https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg"
    },  {
      urlImg:
        "https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg"
    },  {
      urlImg:
        "https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg"
    },
    {
      urlImg:
        "https://z.nooncdn.com/products/tr:n-t_240/v1608997951/N39861512A_1.jpg"
    },  {
      urlImg:
        "https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg"
    },  {
      urlImg:
        "https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg"
    }, 
    {
     urlImg:
    "https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg"}

  ];

  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) =>{
    setOpen(true)
    // setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    // setAnchorEl(null);
    setOpen(false)
  };

  return (
    <div className="App">
      <ImageDataContext.Provider value={{imgData, megaDealImages, sellUpTo, clearnceImgs}}>
        <PrimarySearchAppBar />
        <AllCategories handleOpen ={handleOpen} />
        <FreeDelivery />
        <CarouselComplete />
        <SetTablePart index ="imgData" gridSize ="3"/>
        <MegaDeal condRed = {true} />
        <SetTablePart index ="sellUpTo" gridSize ="4"/>
        <MegaDeal condRed = {false} />
        <Box sx={{display:"flex"}} >
          <MenuBar open = {open} handleClose={handleClose} anchorEl ={anchorEl} />
          <MenuBar open = {open} handleClose={handleClose} anchorEl ={anchorEl} />

        </Box>
        <MoreClearance index ="clearnceImgs" gridSize ="1.7"/>
    

      </ImageDataContext.Provider>
    </div>
  );
}

export default App;
