import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactLists from '../Components/ContactLists';
import { Route, Routes } from 'react-router-dom';
import UserChat from '../Components/UserChat';
import axios from 'axios';
import { Button, IconButton, InputAdornment, Paper, Skeleton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 280;


function Home() {
  // states
  const [contackList, setContackList] = useState([])
  const [userName, setUserName] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)


  // fetching all users data
  const getAllUsers = async() => {
    return await axios.get('http://localhost:4000/users').then((response) => {
      setContackList(response.data)
      setLoading(true)
    }).catch((err) => {
      console.log("error on fetching all data: ", err);
    })
  }

  // onChange search function
  const handleSearchOption = (evt) => {
    setSearch(evt.target.value)
    if(!search){
      getAllUsers()
    }else{
      const filterBySearch = contackList.filter((item) => {
        if(item.name.toLowerCase().includes(search.toLowerCase())){
          return item
        }
      })
      setContackList(filterBySearch)
    }
  }

  // learing search field
  const clearSearch = () => {
    setSearch('')
    getAllUsers()
  }

  // onload rendaring
  useEffect(() => {
    getAllUsers()
  }, [])

  // laoding animation
  const LoadingComponent = () => {
      return(
        <>
        <Box sx={{ display: 'flex'}}>
          <Skeleton sx={{ml: 2}} variant="circular" width={40} height={40} />
          <Box>
            <Skeleton sx={{ml: 2}} variant="rectangular" width={120} height={20} />
            <Skeleton sx={{ml: 2, mt: 1, display: 'block'}} variant="rectangular" width={120} height={19} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex'}}>
          <Skeleton sx={{ml: 2}} variant="circular" width={40} height={40} />
          <Box>
            <Skeleton sx={{ml: 2}} variant="rectangular" width={120} height={20} />
            <Skeleton sx={{ml: 2, mt: 1, display: 'block'}} variant="rectangular" width={120} height={19} />
          </Box>
        </Box>
        </>
      )
  }

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar> 
          {/* search input */}
          <TextField sx={{  backgroundColor: 'lightgrey', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', borderBottomColor: 'white',  }}
              id="input-with-icon-textfield" 
              name={"serach"}
              placeholder='Search'
              value={search}
              onChange={handleSearchOption}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    {search ? <IconButton onClick={clearSearch}><CloseIcon /></IconButton> : ''}
                  </InputAdornment>
                )
              }}
              variant="standard"
            />  
            {/* appbar user name */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, marginLeft: '30px' }}>
            <Typography variant='h6' component={'div'}>{userName}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }, }} >
        <Toolbar  />
        <Box sx={{ overflow: 'auto' }}>
            <Paper elevation={2} sx={{ m: 1, p: 2, height: '60px', display: 'flex'}}>
                <Typography variant={'body'} component={'div'}>CONVERSATIONS</Typography>
                <IconButton sx={{ ml: 4}}> <AddCircleOutlineOutlinedIcon /> </IconButton>
            </Paper>
            
            {/* rendaring contact list in loop using map function */}
            {loading ? contackList.map((item, ind) => {
              return(
                <ContactLists key={ind} link={item.link} name={item.name} lastChat={item.chat[item.chat.length - 1].msg} id={item.id} chat={item.chat} />
              )
            }) : <LoadingComponent />}
        </Box>
        {/* <LoadingComponent /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* managing routes */}
        <Routes>
          <Route path='/users/:id' element={ <UserChat setUserName={setUserName} /> } />
        </Routes>
      </Box>
    </Box>
  )
}

export default Home