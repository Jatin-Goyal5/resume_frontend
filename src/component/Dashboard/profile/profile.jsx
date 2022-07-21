import React, { Component, useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Button, IconButton, OutlinedInput, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import './profile.css';
import { AuthContext } from '../../../context/AuthProvider';
import { Edit, SaveOutlined } from '@material-ui/icons';
import { useEffect } from 'react';
export default function Profile(){
    const [email , setEmail] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [contact , setContact] = useState('');
    const [about, setAbout] = useState('');
    const {updateUser, getDetail} = useContext(AuthContext);
    const [edit,setEdit] = useState(true);

    useEffect(()=>{
        (async()=>{
          let response = await getDetail('user');
          setEmail(response.email);
          setContact(response.contact);
          setName(response.name);
          setLocation(response.location);
          setAbout(response.about);
        })()
    },[]);


    const handleSaveUser = async ()=>{
        try{
            let obj = {
                name:name,
                location: location,
                email: email,
                contact: contact,
                about: about,
            }
            await updateUser(obj);
        }catch(err){
            console.log(err);
        }
    }
    const handleEdit= ()=>{
        setEdit(!edit);
        console.log(!edit);
    }
    return <div class="profilee">
        <div className= "profile">
            <Avatar sx={{ width: 100, height: 100 }}>N</Avatar>
            {edit? <div>
                <Typography>{name}</Typography>
                <Typography>{location}</Typography>
            </div>:<div style={{display:"flex", flexDirection:"column"}}>
                <TextField value={name} onChange={(e)=>setName(e.target.value)}></TextField>
                <TextField value={location} onChange={(e)=>setLocation(e.target.value)}></TextField>
                </div>}
            <IconButton color="primary" onClick={handleEdit}>
                {edit? <EditIcon></EditIcon>: <SaveOutlined></SaveOutlined>}
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
              readOnly 
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