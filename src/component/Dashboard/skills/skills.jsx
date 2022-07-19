import React, { Component, useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { SearchOutlined } from "@material-ui/icons";
import "./skill.css";
import { Rating } from "@mui/material";
import { AuthContext } from "../../../context/AuthProvider";

export default function Skills() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [skillname, setSkillname] =useState('');
  const {addSkill, getSkills} = useContext(AuthContext);
  const [item ,setItems]= useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect( ()=>{
    async function skiller(){
      let data = await getSkills("");
      setItems(data);
    }
    skiller();
    // items= data.data;
  },[]);


  const handleAddSkill= async ()=>{
    try{
      setOpen(false);
      await addSkill(skillname,value);
      let data = await getSkills("");
      setItems(data);
      setSkillname('');
      setValue(1);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div class="skills">
      <div class="header">
        <TextField
          id="standard-bare"
          variant="filled"
          placeholder="Search for Skill"
          style={{width:"50%"}}
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
          Add Skill
        </Button>
        <Dialog
          fullWidth
          onClose={handleClose}
          open={open}
        >
          <DialogTitle >
            ADD SKILL
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
          <DialogContent dividers>
          <div style={{display:"flex",flexDirection:"column" , color:"red", gap:"1rem", fontWeight:"bold"}}>
              <Typography variant='h6'>Skill</Typography>
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
                          value={skillname} 
                          onChange={(e) => {setSkillname(e.target.value) }} 
                        />
                        <Typography >How Would you like to rate yourself?</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                      
                </div>
            </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleAddSkill} variant= "contained">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <>
          {  
             item.map((data, index) => {
                 return (<Paper style={{    width: "50%",
                  height: "3rem",
                  display: "flex",
                  flexDirection:"column",
                  padding: "2%",
                  borderRadius: "1rem",
                  margin: "1%"}} onClick={()=>{}} key={index}>
                 <Typography key={index}  button>
                     {data.name}
                 </Typography>
                  <Rating
                    name="simple-controlled"
                    value={data.rating}
                    readOnly
                  />
             </Paper>);
             })}
      </>
    </div>
  );
}
