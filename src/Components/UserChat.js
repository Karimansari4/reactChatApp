import { Box, Button, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MessageList from './MessageList';
import MuiAlert from '@mui/material/Alert';

// custom alert
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function UserChat({ setUserName}) {

    // getting id from previous page using uesParams() of react-router-dom
    const {id} = useParams()

    // states
    const [userChat, setUserChat] = useState([])
    const [user, setUser] = useState('')
    const [message, setMessage] = useState({
        userName: '',
        msg: ''
    })
    const [refresh, setRefresh] = useState(false)
    const [userMsg, setUserMsg] = useState([])
    const [open, setOpen] = React.useState(false);
    const [customVariant, setCustomVariant] = React.useState('success')
    const [success, setSuccess] = React.useState('')
    const [error, setError] = React.useState('')

    // fetching single user data
    const getSingleUser = async() => {
        return await axios.get(`http://localhost:4000/users/${id}`).then((response) => {
            setUserChat(response.data.chat)
            setUserName(response.data.name)
            setUser(response.data)
        }).catch((err) => {
            console.log("error on getSingleUser: ", err);
        })
    }

    // onChange event
    const handleOnChange = evt => {
        setMessage({
            ...message,
            userName: user.name,
            [evt.target.name] : evt.target.value
        })
    }

    // on page load rendaring
    useEffect(() => {
        getSingleUser()
        setUserMsg(JSON.parse(localStorage.getItem("chat") || "[]") || [])
    }, [id, refresh])

    
    // handling msg sending
    const handleSubmit = async( evt ) => {
        evt.preventDefault()
        setMessage('')
        if(!message.msg){
            setError('Please type somthing...')
            setCustomVariant('error')
            setOpen(true)
        }else{
            const update = localStorage.setItem("chat", JSON.stringify([...userMsg, message]))
            
                if(refresh){
                    setRefresh(false)
                }else{
                    setRefresh(true)
                }
                setMessage({userName: '', msg: ''})
        }
    }

    // closing alert
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    }


    return (
        <Box >
            {/* alert popup */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={customVariant} sx={{ width: '100%' }}>
                  {success ? success : error}
              </Alert>
            </Snackbar>
            <Box >
                {/* rendaring message */}
                {userChat.map((item, ind) => {
                    return (
                        <MessageList key={ind} name={user.name} msg={item.msg} profile={user.link} />
                    )
                })}
            </Box>  
            <Box sx={{ alignContent: 'right', float: 'right'}}>
                {/* rendaring message */}
                {userMsg?.map((item, ind) => {
                    if(item.userName == user.name){
                        return (<MessageList key={ind} name={user.name} msg={item.msg} profile={user.link} />)
                    }
                })}
            </Box>
            
            {/* managing sending bar with input and button */}
            <Box sx={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex'}} component={'form'} onSubmit={handleSubmit}>
                <IconButton> <AttachFileIcon /> </IconButton>
                <TextField type='text' name='msg' value={message.msg} placeholder='Type message...' variant='standard' sx={{ width: '65%'}} onChange={handleOnChange} />
                <Button type='submit' variant='contained' color="success" sx={{ ml: "5px", width: '10%', marginBottom: '10px', marginLeft: '10px'}} >Send</Button>
            </Box>
        </Box>
    )
}

export default UserChat