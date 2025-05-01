import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import { Box, Stack } from '@mui/material'
import WorkProcess from './Pages/WorkProcess'

export default function App() {
  return (
    <Stack gap={15} sx={{background: `whitesmoke`}}>
    <Navbar/>
    <Stack sx={{  }} >
     <Home/>
      <WorkProcess/>
    </Stack>
     <Footer/>
    </Stack>
  )
}
