import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import { Box, Stack } from '@mui/material'

export default function App() {
  return (
    <Stack gap={10}>
    <Navbar/>
    <Stack sx={{ }} >
     <Home/>

    </Stack>
     <Footer/>
    </Stack>
  )
}
