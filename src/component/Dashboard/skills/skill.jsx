import { OutlinedInput, TextField, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React, { Component } from 'react'
export default function Skill(){
    return  <div style={{display:"flex",flexDirection:"column" , color:"red", gap:"1rem", fontWeight:"bold"}}>
   <Typography variant='h6'>Skill</Typography>
        <OutlinedInput 
        style={{borderRadius:"0rem 2rem 2rem 2rem"}} 
        placeholder="Enter your contact email" 
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={"email"} 
              onChange={(e) => { }} 
            />
             <Typography >How Would you like to rate yourself?</Typography>
             <Rating
                name="simple-controlled"
                value="1"
                onChange={(event, newValue) => {
                    // setValue(newValue);
                }}
            />
           
    </div>;
}