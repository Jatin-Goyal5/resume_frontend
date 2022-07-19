import { Button, Typography } from '@material-ui/core';
import { FontDownloadOutlined } from '@material-ui/icons';
import React, { Component } from 'react'
export default function Report(){
    const handleDownload = ()=>{
        var element = document.createElement('a');
        var filename = 'test.png';
        element.setAttribute('href');
        element.setAttribute('download');
    }
    return <div>
        <Typography id="name">My Report</Typography>
        <Button onClick={handleDownload}>
            Share Report
        </Button>
        <Button onClick={handleDownload}>
            Download Report
        </Button>
    </div>;
}