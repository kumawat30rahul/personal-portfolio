import { Box } from '@mui/material'
import React from 'react'
import './blur-card.css'

const BlurCard = ({children}) => {
  return (
    <Box className="blurcard">
        {children}
    </Box>
  )
}

export default BlurCard