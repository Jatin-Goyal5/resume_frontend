import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core';
import { FontDownloadOutlined } from '@material-ui/icons';
import React, { Component, useEffect, useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Project from './Project/project';
import Skill from './skills/skill';
export default function Report(){
    const [user , setUser] = useState({});
    const {getDetail} = useContext(AuthContext);
    useEffect(()=>{
        (async()=>{
            let user = await getDetail('user');
            let skills = await getDetail("skill");
            let projects = await getDetail('project');
            user= {
                ...user,
                skills:skills,
                projects: projects,
            }
            console.log(user);
            setUser(user)
        })()
    },[])
    const handleDownload = ()=>{
        var element = document.createElement('a');
        var filename = 'test.png';
        element.setAttribute('href');
        element.setAttribute('download');
    }
    return <div style={{width:"80%" , margin:"2rem",gap:"1rem"}}>

        <Box style={{ display:"flex",padding:"1rem",gap:"2rem", alignItems :"center" ,color: "#00000", minHeight:"12rem"  }}>
        <Avatar style={{width:"8rem",height:"8rem"}}>N</Avatar>
            <div>
                <Typography variant='h4' style={{fontSize:"2rem",fontWeight:"bold" ,marginTop:"1rem"}}>{user.name}</Typography>
                <div>
                <Typography variant='h4' style={{fontSize:"1rem", color:"red" ,marginTop:"1rem"}}>{user.location}</Typography>
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <Typography variant='h4' style={{fontSize:"1rem"}}>{user.email}</Typography>
                    <Typography variant='h4' style={{fontSize:"1rem",}}>{user.contact}</Typography>
                    </div>
                </div>

            </div>
        </Box>
        <Typography variant='h4' style={{fontSize:"1rem", color:"red" ,margin:"1rem"}}>About Me</Typography>
        <Box style={{  backgroundColor:"whitesmoke" ,color: "#00000", minHeight:"12rem" ,padding:"1rem",borderRadius:"2rem",wordWrap:"break-word" }}>
            {user.about}
        </Box>
        <Typography variant='h4' style={{fontSize:"2rem", fontWeight:"bold",margin:"1rem"}}>Skills</Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           
            user.skills && user.skills.map((data,index)=>{
                return (
                    <Grid item xs={6}>
                      <Skill skill={data} index={index}></Skill>
                    </Grid>
                  );
            })
        }
        </Grid>
        <Typography variant='h4' style={{fontSize:"2rem", fontWeight:"bold",margin:"1rem" }}>Projects</Typography>
        <div>
        {
        user.projects && user.projects.map((data, index) => {
            return (
              <Project project={data} index={index}></Project>
            );
          })}
      </div>
    </div>;
}