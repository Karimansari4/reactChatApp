import { Container, Typography } from '@mui/material'
import React from 'react'

function MessageList({name, msg, profile,}) {
  
  return (
    <Container sx={{ marginBottom: '10px'}}>
        <Typography variant='body' component={'div'}  sx={{ backgroundColor: 'lightgrey', width: msg.length + '2px', padding: '2px', borderRadius: '50% 20% / 10% 40%'}}>{msg}</Typography>
    </Container>
  )
}

export default MessageList