import React, { Component, useContext, useEffect, useState } from "react";
import {
  Paper,
  Typography,
} from "@material-ui/core";
import "./skill.css";
import { Rating } from "@mui/material";

export default function Skill({skill}) {
    return <Paper style={{    
        backgroundColor: '#fffff' ,
        padding: "1rem",
        textAlign: 'center',
        margin:"1rem",
        color: "#00000"}}>
   <Typography  button>
       {skill.name}
   </Typography>
    <Rating
      name="simple-controlled"
      value={skill.rating}
      readOnly
    />
</Paper>;

}