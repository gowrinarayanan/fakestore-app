import React from 'react'
import { Box, Button, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import { AppBar} from '@mui/material'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (

    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product App
          </Typography>
          <Link to={'/'}><Button variant='contained' color="inherit">Home</Button></Link>
          <Link to={'/Add'}><Button variant='contained' color="inherit">Add</Button></Link>  

        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Nav