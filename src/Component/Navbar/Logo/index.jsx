import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export default function Logo() {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={0.5}>
      <motion.img
        src="/logo.png"
        alt="logo Site"
        style={{ width: "50px", margin: "0" }}
        initial={{ opacity: 0, y: 50, rotate: 0  }}
        animate={{ opacity: 1, y: 0, rotate: 360  }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Baradaran
        </Typography>
      </motion.div>
    </Stack>
  );
}
