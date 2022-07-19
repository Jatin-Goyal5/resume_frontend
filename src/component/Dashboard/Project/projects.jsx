import React, { Component } from 'react'
import {  Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, OutlinedInput, Paper, TextField, Typography} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { SearchOutlined } from '@material-ui/icons';

import './project.css'
import { Rating } from '@mui/material';
import Project from './project';
export default function Projects(){
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(1);
  const [projectname , setProjectname] = React.useState('');
  const item =[
    {
      name: "name",
      description: "sndkasmdkamsdamksdma",
      skills:["hello"],
    }
  ];
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddProject= ()=>{

  }

    return  <div class="skills">
    <div class="header">
      <TextField
        id="standard-bare"
        variant="filled"
        placeholder="Search for Project"
        style={{width:"50%",borderRadius:"5rem"}}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
      <Button
        variant="contained"
        style={{ height: "3rem", color: "white", background: "red" }}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add Project
      </Button>
      <Dialog
        onClose={handleClose}
        fullWidth
        open={open}
      >
        <DialogTitle >
          Add a New Project
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{
              position: "absolute",
              marginLeft:"25rem"
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers style={{display:"flex",flexDirection:"column" ,minWidth:"25rem",color:"red", fontWeight:"bold"}}>
              <Typography variant='h6'>Project Title</Typography>
              <OutlinedInput 
              style={{borderRadius:"0rem 2rem 2rem 2rem"}} 
              placeholder="Enter your project title" 
                    margin="normal"
                    required
                    id="title"
                    name="title"
                    autoComplete="title"
                    autoFocus
                    value={projectname} 
                    onChange={(e) => {setProjectname(e.target.value) }} 
                  />
            <Typography variant='h6'>Project Description</Typography>
              <OutlinedInput 
              style={{borderRadius:"0rem 2rem 2rem 2rem"}} 
              placeholder="Enter your project description" 
                    margin="normal"
                    required
                    
                    id="description"
                    name="description"
                    autoComplete="email"
                    autoFocus
                    value={projectname} 
                    onChange={(e) => {setProjectname(e.target.value) }} 
                  />
              <Typography variant='h6'>Add Project Skills</Typography>
              <OutlinedInput 
              style={{borderRadius:"0rem 2rem 2rem 2rem"}} 
              placeholder="Enter your skill" 
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={projectname} 
                    onChange={(e) => {setProjectname(e.target.value) }} 
                  />
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleAddProject} variant= "contained">
              Save changes
            </Button>
          </DialogActions>
      </Dialog>
    </div>
    <div>
        {
           
           item.map((data, index) => {
               return (<Paper style={{    width: "80%",
                display: "flex",
                flexDirection:"column",
                padding: "2%",
                borderRadius: "1rem",
                marginLeft: "5%"}} onClick={()=>{}} key={index}>
               <Typography key={index} variant="h4" button >
                   {data.name}
               </Typography>
               <Typography key={index}  button >
                   {data.description}
               </Typography>
               {
                  data.skills.map((data)=>{
                    return  <Chip 
                    style={{color:"red",
                    borderColor:"red",
                    width:"10%",
                    marginTop:"1rem"
                  }}
                    label={data}
                    variant="outlined" />;
                  })
               }
              
           </Paper>);
           })}
        

    </div>
  </div>;
}