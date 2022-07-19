import React, { Component, useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Button, IconButton, OutlinedInput, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import './profile.css';
import { AuthContext } from '../../../context/AuthProvider';
import { Edit } from '@material-ui/icons';
export default function Profile(){
    const [email , setEmail] = useState('');
    const [contact , setContact] = useState('');
    const [about, setAbout] = useState('');
    const {updateUser} = useContext(AuthContext);
    const handleSaveUser = async ()=>{
        try{
            let obj = {
                email: email,
                contact: contact,
                about: about,
            }
            await updateUser();
        }catch(err){
            console.log(err);
        }
    }
    return <div class="profilee">
        <div className= "profile">
            <Avatar sx={{ width: 100, height: 100 }}>N</Avatar>
            <div>
                <Typography>name</Typography>
                <Typography>location</Typography>
            </div>
            <IconButton color="primary" onClick={{}}>
                <EditIcon></EditIcon>
            </IconButton>
        </div>
        <div class ="detail">
        <div>
        <Typography >Email</Typography>
        <OutlinedInput 
        style={{borderRadius:"0rem 5rem 5rem 5rem"}} 
        placeholder="Enter your contact email" 
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email} 
              onChange={(e) => { setEmail(e.target.value); }} 
            />
        </div>
        <div>
        <Typography >Contact</Typography>
        <OutlinedInput
        style={{borderRadius:"0rem 5rem 5rem 5rem"}} 
        placeholder="Enter your contact number" 
            margin="normal"
            required
            fullWidth
            id="contact"
            name="contact"
            autoComplete="contact"
            autoFocus
            value={contact} 
            onChange={(e) => { setContact(e.target.value); }} 
        />
        </div>
        <div>
            <Typography>About Me</Typography>
            <TextareaAutosize
                aria-label="empty textarea"
                minRows={10}
                maxRows={10}
                placeholder="Empty"
                style={{ width: "100%" }}
                value={about}
                onChange={(e)=>{setAbout(e.target.value)}}    
            />
        </div>
        <Button variant="contained" onClick= {handleSaveUser}> Save </Button>
        </div>
    </div>;
}