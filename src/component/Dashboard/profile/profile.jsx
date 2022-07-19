import React, { Component, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { blue } from '@material-ui/core/colors';
import { OutlinedInput, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import './profile.css';
export default function Profile(){
    const [email , setEmail] = useState('');
    const [contact , setContact] = useState('');
    return <div class="profilee">
        <div className= "profile">
            <Avatar sx={{ width: 100, height: 100 }}>N</Avatar>
            <div className="name">
                <Typography>name</Typography>
                <Typography>location</Typography>
            </div>
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
            />
        </div>
        </div>
    </div>;
}