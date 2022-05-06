import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/survey');
  }
  return (
    <>
    <Box sx={{mt:5}}>
      <Typography variant='h3' sx={{fontFamily:'sans-serif' ,fontWeight:'bold',color:'gray'}}>
         Welcome user
      </Typography>
      <Button variant="contained" onClick={handleClick} sx={{mt:2}}>Get Started</Button>

    </Box>
    </>
  )
}

export default Home