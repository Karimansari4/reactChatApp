import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Typography, List } from '@mui/material';
import { Link } from 'react-router-dom';

function ContactLists({link, name, lastChat, id, chat}) {
    
    
    return (
            <List>
                <Link to={`/users/${id}`} style={{ textDecoration: 'none', color: 'black'}} >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar alt='Users' src={link} />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant='body' component={'div'} sx={{color: 'black', fontSize: '18px', fontWeight: 500}}>{name}</Typography>
                                <Typography variant='body2' component={'div'} sx={{ color: 'gray'}}>{lastChat}</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
    )
}

export default ContactLists