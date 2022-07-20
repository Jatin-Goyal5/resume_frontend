import React, {  useContext, useEffect } from "react";
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, Input, MenuItem, OutlinedInput, Select, TextField, Typography
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { SearchOutlined } from "@material-ui/icons";
import "./project.css";
import { AuthContext } from "../../../context/AuthProvider";
import Project from "./project";
export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const [skill, setSkill] = React.useState([]);
  const [projectname, setProjectname] = React.useState("");
  const [projectdescription, setProjectdescription] = React.useState("");
  const { addProject, getProjects, getSkills } = useContext(AuthContext);
  const [projects, setProjects] = React.useState([]);
  const [availableSkills , setAvailableskills] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkill(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    (async()=>{
      let data = await getProjects();
      let skillsResponse = await getSkills();
      skillsResponse = skillsResponse.map((data)=>{
        return data.name;
      })
      setAvailableskills(skillsResponse);
      console.log(skillsResponse);
      setProjects(data);  
    })();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddProject = async () => {
    try {
      setOpen(false);
      if (projectname.length === 0) {
        return;
      }
      await addProject(projectname, projectdescription, skill);
      setProjectname("");
      setProjectdescription("");
      setSkill([]);
    } catch (err) {}
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
        <Dialog onClose={handleClose} fullWidth  open={open}>
          <DialogTitle> Add a New Project
            <IconButton
              onClick={handleClose}
              style={{
                position: "absolute",
                marginLeft: "25rem",
              }}
              ><CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "25rem",
              color: "red",
              fontWeight:"bolder",
              gap: "0.5rem"
            }}
            ><Typography variant="h6">Project Title</Typography>
          <OutlinedInput style={{ borderRadius: "2rem 2rem 2rem 2rem" }}
              placeholder="Enter your project title"
              margin="normal"
              required
              id="title"
              name="title"
              autoFocus
              value={projectname}
              onChange={(e) => {
                setProjectname(e.target.value);
              }}
            /><Typography variant="h6">Project Description</Typography>
            <OutlinedInput
              style={{ borderRadius: "2rem 2rem 2rem 2rem" }}
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
            <FormControl sx={{ m: 4 ,p:1}}>
                <Select
                  multiple
                  value={skill}
                  onChange={handleChange}
                  input={<OutlinedInput style={{ borderRadius: "2rem 2rem 2rem 2rem" }} id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}>
                  { availableSkills && availableSkills.map((data) => (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleAddProject} variant="contained" color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        {projects &&
          projects.map((data, index) => {
            return (
              <Project project={data}></Project>
            );
          })}
      </div>
    </div>
  );
}
