import { Card, Chip, Paper, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react'
export default function Project({project,index}){
    return <>
          <Paper
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2%",
                  borderRadius: "1rem",
                  margin: "2%",
                  gap:"1rem"
                }}
                onClick={() => {}}
                key={index}
              >
                <Typography key={index} variant="h4">
                  {project.title}
                </Typography>
                <Typography key={index} button>
                  {project.description}
                </Typography>
                <div>
                {project.skills &&
                  project.skills.map((data) => {
                    return (
                      <Chip
                        style={{
                          color: "red",
                          width: "10%",
                          margin: "0.2rem",
                          border:"solid"
                        }}
                        label={data}
                        variant="outlined"
                      />
                    );
                  })}
                </div>
              </Paper>
    </>;
}