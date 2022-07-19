import React, { Component, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
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
import {SearchOutlined } from "@material-ui/icons";

import "./project.css";
import { AuthContext } from "../../../context/AuthProvider";
export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const [skill, setSkill] = React.useState(["hello"]);
  const [projectname, setProjectname] = React.useState("");
  const [projectdescription, setProjectdescription] = React.useState("");
  const {addProject, getProjects}= useContext(AuthContext);
  const [projects, setProjects] = React.useState([]);
  useEffect(()=>{
    async function skiller(){
      let data = await getProjects();
      setProjects(data);
    }
    skiller();
  },[])
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddProject = async() => {
    try{
        setOpen(false);
        if(projectname.length === 0){
          return;
        }
        let response = await addProject(projectname, projectdescription, skill);
        setProjectname('');
        setProjectdescription('');
        setSkill([]);
    }catch(err){

    }
  };

  return (
    <div class="skills">
      <div class="header">
        <TextField
          id="standard-bare"
          variant="filled"
          placeholder="Search for Project"
          style={{ width: "50%", borderRadius: "5rem" }}
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
        <Dialog onClose={handleClose} fullWidth open={open}>
          <DialogTitle>
            Add a New Project
            <IconButton
              aria-label="close"
              onClick={handleClose}
              style={{
                position: "absolute",
                marginLeft: "25rem",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent
            dividers
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "25rem",
              color: "red",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h6">Project Title</Typography>
            <OutlinedInput
              style={{ borderRadius: "0rem 2rem 2rem 2rem" }}
              placeholder="Enter your project title"
              margin="normal"
              required
              id="title"
              name="title"
              autoComplete="title"
              autoFocus
              value={projectname}
              onChange={(e) => {
                setProjectname(e.target.value);
              }}
            />
            <Typography variant="h6">Project Description</Typography>
            <OutlinedInput
              style={{ borderRadius: "0rem 2rem 2rem 2rem" }}
              placeholder="Enter your project description"
              margin="normal"
              required
              id="description"
              name="description"
              autoFocus
              value={projectdescription}
              onChange={(e) => {
                setProjectdescription(e.target.value);
              }}
            />
            <Typography variant="h6">Add Project Skills</Typography>
            <Box borderRadius="1rem" sx={{ bgcolor: "#e7e9eb" }}>
              {skill.map((data) => {
                return <Chip label={data} variant="outlined" />;
              })}
              <IconButton>
                <AddIcon></AddIcon>
              </IconButton>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleAddProject} variant="contained">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        {projects && projects.map((data, index) => {
          return (
            <Paper
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                padding: "2%",
                borderRadius: "1rem",
                marginLeft: "5%",
              }}
              onClick={() => {}}
              key={index}
            >
              <Typography key={index} variant="h4" button>
                {data.title}
              </Typography>
              <Typography key={index} button>
                {data.description}
              </Typography>
              {data.skills && data.skills.map((data) => {
                return (
                  <Chip
                    style={{
                      color: "red",
                      borderColor: "red",
                      width: "10%",
                      marginTop: "1rem",
                    }}
                    label={data}
                    variant="outlined"
                  />
                );
              })}
            </Paper>
          );
        })}
      </div>
    </div>
  );
}
