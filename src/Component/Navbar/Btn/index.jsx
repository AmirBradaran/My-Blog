import React from "react";
import { Box, Button, patch } from "@mui/material";
import { Link } from "react-router-dom";
import GooeyNav from "../../../Components/GooeyNav/GooeyNav"
const Btn = () => {
  
  const items = [
    { label: "Home", path: "/" },
    { label: "About", path: "/describe" },
  ];
  return (
    
    
    <div >
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default Btn;
