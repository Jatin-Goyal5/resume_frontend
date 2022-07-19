import { Card, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'
export default function Project(){
    return <>
         <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              variant="outlined"
              name="email"
              autoComplete="email"
              autoFocus
              value={"email"} 
              onChange={(e) => {  }} 
            />
    </>;
}