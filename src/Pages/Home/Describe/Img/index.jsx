import { Stack } from '@mui/material'
import React from 'react'
import MeImg from "../../../../assets/Me-(2).png";
export default function Img() {
  return (
    <Stack
    alignItems={"center"}
      sx={{
        // border:"1px solid black",
        height: "400px",
        width: { xs:"325px" , md:"350px"},
        borderRadius: "20px",
        position: "relative",
        background:"#F0F1F3"
      }}
    >
      <img
        src={MeImg}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          position: "absolute",
        }}
      />
    </Stack>
  )
}
